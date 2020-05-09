import {
	ChangeDetectionStrategy,
	Component,
	ChangeDetectorRef,
	ViewEncapsulation,
	ViewChild,
	OnInit,
	Input
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PblNgridComponent, createDS, columnFactory, PblNgridSortOrder } from '@pebula/ngrid';
import { toggleDetailRow } from '@pebula/ngrid/detail-row';
import { setStickyRow, setStickyColumns } from '@pebula/ngrid/sticky';

const COLUMNS = columnFactory()
	.default({ width: '100px', reorder: true, resize: true })
	.table(
		{ prop: 'Extension', sort: true, width: '3%' },
		{ prop: 'DocFileName', sort: true, width: '35%' },
		{ prop: 'DocType', sort: true, width: '25%' },
		{ prop: 'FileSize', sort: true, width: '8%' },
		{ prop: 'CreatedBy', sort: true, width: '10%' },
		{ prop: 'CreatedDate', sort: true, width: '24%' }
	)
	.header({ rowClassName: 'pbl-groupby-row' }, { id: 'pbl-groupby-row', type: 'pbl-groupby-row', label: ' ' });

@Component({
	selector: 'hza-doc-data-grid',
	templateUrl: './doc-data-grid.component.html',
	styleUrls: ['./doc-data-grid.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
			state('*', style({ height: '*', visibility: 'visible' })),
			transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocDataGridComponent implements OnInit {
	@Input() documents: Document[];

	dataSource = createDS<Document>().onTrigger(() => this.documents).create();

	columns = COLUMNS.build();
	detailRowPredicate: ((index: number, rowData: Document) => boolean) | true | undefined;
	detailRow: 'on' | 'off' | 'predicate' = 'off';
	enableRowSelection = true;
	singleDetailRow = false;

	@ViewChild(PblNgridComponent, { static: true })
	table: PblNgridComponent<Document>;
	private detailRowEvenPredicate = (index: number, rowData: Document) => index % 2 !== 0;

	constructor() {}

	ngOnInit() {}
	refresh(): void {
		this.table.ds.refresh();
	}
	dropped(e) {
		console.log(e);
	}
	clear(): void {
		this.dataSource.setSort();
	}

	toggleActive(columnId: string): void {
		const currentSort = this.dataSource.sort;
		let order: PblNgridSortOrder = 'asc';
		if (currentSort && currentSort.column && currentSort.column.id === columnId) {
			order = currentSort.sort && (currentSort.sort.order as any);
			if (order === 'asc') {
				order = 'desc';
			} else if (order === 'desc') {
				this.clear();
				return;
			} else {
				order = 'asc';
			}
		}
		this.dataSource.hostGrid.setSort(columnId, { order });
	}
	getNextDirection(key: string): string {
		const sort = this.dataSource.sort;
		if (!sort.column || sort.column.id !== key) {
			return 'asc';
		} else {
			return sort.sort.order === 'asc' ? 'desc' : 'clear';
		}
	}
}
