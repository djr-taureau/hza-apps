//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hza-section-title, [hzaSectionTitle]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./section-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'hza-section-title' },
})
export class SectionTitleComponent {}

@Directive({
  selector: 'hza-section-subtitle, [hzaSectionSubtitle]',
  host: { class: 'hza-section-subtitle' },
})
export class SectionSubtitleDirective {}
