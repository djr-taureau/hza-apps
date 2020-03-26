//tslint:disable:use-host-property-decorator
import { Directive } from '@angular/core';

@Directive({
  selector: '[hzaWidgetLink]',
  host: { class: 'hza-widget-link' },
})
export class WidgetLinkDirective {}
