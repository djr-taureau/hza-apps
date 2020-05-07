//tslint:disable:fs-value-list-header use-host-property-decorator
import { Component, Directive, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-value-list-item, [fsValueListItem]',
  templateUrl: './value-list-item.component.html',
  host: { class: 'fs-value-list-item' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValueListItemComponent {}

@Directive({
  selector: 'fs-value-list-item-index, [fsValueListItemIndex]',
  host: { class: 'fs-value-list-item-index' },
})
export class ValueListItemIndexDirective {}

@Directive({
  selector: 'fs-value-list-item-text, [fsValueListItemText]',
  host: { class: 'fs-value-list-item-text' },
})
export class ValueListItemTextDirective {}

@Directive({
  selector: 'fs-value-list-item-value, [fsValueListItemValue]',
  host: { class: 'fs-value-list-item-value' },
})
export class ValueListItemValueDirective {}
