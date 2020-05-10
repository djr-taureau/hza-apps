import {
  DataSource,
  ListRange,
  SelectionChange,
  SelectionModel,
} from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, shareReplay, startWith, tap } from 'rxjs/operators';
import { CoreTableFilter } from './filter/filter';
import { HashMap } from './hash-map';
import { sortBy } from './sort-by';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

/**
 * `DataSource` to be used with `CoreTable` and `MatTable`.
 *
 * Supports advanced filtering, sorting, pagination and virtual scroll.
 */
export class CoreTableDataSource<T> extends DataSource<T> {
  /**
   * A stream of the filtered arrays of data
   */
  readonly filteredData: Observable<T[]>;

  private readonly _filteredData = new BehaviorSubject<T[]>([]);
  private filterMap: HashMap<CoreTableFilter<T>> = {};
  private readonly selection = new SelectionModel<T>(true, []);
  private readonly visibleData: Observable<any[]>;
  private _data: T[];

  batch = 20;
  theEnd = false;

  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;

  /**
   * The full array of data
   */
  get allData(): T[] {
    return this._data.slice();
  }
  set allData(data: T[]) {
    this._data = data;
    this.filter(data, this.filterMap);
    this.selection.clear();
  }

  /**
   * The array of visible data (being rendered)
   */
  get data(): T[] {
    let data: T[];
    this.visibleData.subscribe(d => (data = d)).unsubscribe();

    return data;
  }

  /**
   * The array of currently applied `CoreTableFilter`.
   */
  get filters(): CoreTableFilter<T>[] {
    return Object.values({ ...this.filterMap });
  }

  /**
   * The array of currently selected items.
   */
  get selected(): T[] {
    return this.selection.selected;
  }

  /**
   * Whether all visible items are selected.
   */
  get selectedAll(): boolean {
    return (
      this.selection.hasValue() && this.selected.length === this.data.length
    );
  }

  /**
   * A stream of changes made on selections.
   */
  get selectionChanged(): Observable<SelectionChange<T>> {
    return this.selection.changed;
  }

  constructor(
    initialData: T[],
    {
      sort,
      paginator,
      viewport,
    }: {
        sort?: MatSort;
        paginator?: MatPaginator;
        viewport?: CdkVirtualScrollViewport;
      } = {}
  ) {
    super();
    this._data = initialData;
    this.filteredData = this._filteredData.asObservable();
    this._filteredData.next(initialData);

    const ordered =
      sort == null
        ? this._filteredData
        : combineLatest(
          this._filteredData,
          sort.sortChange.pipe(startWith({} as Sort))
        ).pipe(
          map(([data, { active, direction }]) =>
            !active || !direction
              ? data
              : sortBy(t => getProperty(t, active), {
                reverse: direction === 'desc',
              })(data)
          )
        );

    const paged =
      paginator == null
        ? ordered
        : combineLatest(ordered, paginator.page.pipe(startWith(null))).pipe(
          map(([data]) => data),
          tap(data => {
            paginator.length = data.length;
          }),
          map(data => {
            const start = paginator.pageIndex * paginator.pageSize;
            return data.slice(start, start + paginator.pageSize);
          })
        );
    // type EmptyType = {}
    // interface EmptyInterface {}
    const sliced =
      viewport == null
        ? paged
        : combineLatest(
          paged,
          viewport.renderedRangeStream.pipe(startWith({} as ListRange))
        ).pipe(
          map(([data, { start, end }]) =>
            start == null || end == null ? data : data.slice(start, end)
          )
        );

    this.visibleData = sliced.pipe(shareReplay(1));
  }

  /**
   * Clears all filters set with `setFilter`.
   */
  clearFilters(): void {
    this.filterMap = {};
    this._filteredData.next(this.allData);
  }

  /**
   * Clears all of the selected items.
   */
  clearSelection(): void {
    this.selection.clear();
  }

  /**
   * Whether an item is selected.
   */
  isSelected(item: T): boolean {
    return this.selection.isSelected(item);
  }

  /**
   * Selects one or more items.
   */
  select(...items: T[]): void {
    this.selection.select(...items);
  }


  setFilter({
    key,
    predicate,
    valueFn = (item: T) => getProperty(item, key),
  }: CoreTableFilter<T>): void {
    const newKey = !this.filterMap[key];
    const newFilter = { key, predicate, valueFn };
    this.filterMap[key] = newFilter;

    newKey
      ? this.filter(this._filteredData.value, { [key]: newFilter })
      : this.filter(this.allData, this.filterMap);
  }

  /**
   * Toggles an item between selected and deselected.
   */
  toggle(item: T): void {
    this.selection.toggle(item);
  }

  /**
   * Toggles the selection of all visible items.
   *
   * If all are selected, deselects all.
   *
   * If some or none are selected, selects all.
   */
  toggleAll(): void {
    this.selectedAll
      ? this.selection.clear()
      : this.selection.select(...this.data);
  }

  connect() {
    return this.visibleData;
  }

  disconnect() { }

  private filter(data: T[], filters: HashMap<CoreTableFilter<T>>): void {
    this._filteredData.next(
      (data || []).filter((t: T) => filterOne(t, filters))
    );
  }
}

function filterOne<T>(item: T, filters: HashMap<CoreTableFilter<T>>) {
  return Object.values(filters).every(({ predicate, valueFn }) =>
    predicate(valueFn(item))
  );
}

function getProperty<T>(item: T, propertyPath: string): string {
  return propertyPath.split('.').reduce((obj, prop) => obj && obj[prop], item);
}
