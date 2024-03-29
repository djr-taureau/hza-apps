//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hza-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'hza-control-bar' },
})
export class ControlBarComponent {}

@Directive({
  selector: 'hza-control-bar-control, [hzaControlBarControl]',
  host: { class: 'hza-control-bar-control' },
})
export class ControlBarControlDirective {}
