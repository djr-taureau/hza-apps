//tslint:disable:fs-value-list-header use-host-property-decorator
import { Component, Directive, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-value-list-header, [fsValueListHeader]',
  templateUrl: './value-list-header.component.html',
  host: { class: 'fs-value-list-header' },
  encapsulation: ViewEncapsulation.None,
})
export class ValueListHeaderComponent {}

@Directive({
  selector: 'fs-value-list-header-icon, [fsValueListHeaderIcon]',
  host: { class: 'fs-value-list-header-icon' },
})
export class ValueListHeaderIconDirective {}

@Directive({
  selector: 'fs-value-list-header-title, [fsValueListHeaderTitle]',
  host: { class: 'fs-value-list-header-title' },
})
export class ValueListHeaderTitleDirective {}

@Directive({
  selector: 'fs-value-list-header-column, [fsValueListHeaderColumn]',
  host: { class: 'fs-value-list-header-column' },
})
export class ValueListHeaderColumnDirective {}
