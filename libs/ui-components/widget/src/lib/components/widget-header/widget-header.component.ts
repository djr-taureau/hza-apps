//tslint:disable:use-host-property-decorator use-input-property-decorator

import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { mixinColor, HasColor, ComponentHostBase } from '@hza/ui-components';

export const _WidgetHeaderBase = mixinColor(ComponentHostBase);

@Component({
  selector: 'hza-widget-header',
  inputs: ['color'],
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'hza-widget-header' },
})
export class WidgetHeaderComponent extends _WidgetHeaderBase implements HasColor {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
