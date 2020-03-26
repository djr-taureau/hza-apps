//tslint:disable:directive-selector
//tslint:disable:use-host-property-decorator
import { Directive } from '@angular/core';

@Directive({
  selector: '[hzaWidgetContent], hza-widget-content,',
  host: { class: 'hza-widget-content' },
})
export class WidgetContentDirective {}
