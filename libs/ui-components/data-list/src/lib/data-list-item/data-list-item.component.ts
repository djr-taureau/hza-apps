// tslint:disable:use-host-property-decorator use-input-property-decorator
import { Component, ElementRef, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  mixinNavigation,
  HasNavigation,
  HasDataItemState,
  mixinDateItemState,
  mixinCssModifiers,
  ComponentHostBase,
} from '@hza/ui-components/core';

export const _DataListItemComponent = mixinNavigation(mixinDateItemState(mixinCssModifiers(ComponentHostBase)));

@Component({
  selector: 'hza-data-list-item',
  exportAs: 'dataItem',
  inputs: ['item', 'location', 'wrapWithAnchor'],
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.scss'],
  host: { class: 'hza-data-list-item' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListItemComponent<T> extends _DataListItemComponent implements HasNavigation, HasDataItemState<T> {
  @Input() icon: string;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
