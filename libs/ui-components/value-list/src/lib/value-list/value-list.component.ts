//tslint:disable: fs-value-list-header use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fs-value-list',
  templateUrl: './value-list.component.html',
  styleUrls: ['./value-list.component.scss'],
  host: { class: 'fs-value-list' },
  encapsulation: ViewEncapsulation.None,
})
export class ValueListComponent {}
