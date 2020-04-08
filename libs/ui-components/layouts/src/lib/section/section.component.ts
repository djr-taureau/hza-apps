//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hza-section',
  template: '<ng-content></ng-content>',
  styleUrls: ['./section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'hza-section' },
})
export class SectionComponent {}

@Directive({
  selector: 'hza-section-header, [hzaSectionHeader]',
  host: { class: 'hza-section-header' },
})
export class SectionHeaderDirective {}

@Directive({
  selector: 'hza-section-footer, [hzaSectionFooter]',
  host: { class: 'hza-section-footer' },
})
export class SectionFooterDirective {}

@Directive({
  selector: 'hza-section-content, [hzaSectionContent]',
  host: { class: 'hza-section-content' },
})
export class SectionContentDirective {}
