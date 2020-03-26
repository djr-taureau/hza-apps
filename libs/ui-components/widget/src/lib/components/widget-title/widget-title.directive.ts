//tslint:disable:use-host-property-decorator use-input-property-decorator
import { Directive, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { TextColorPalette, mixinTextColor, HasColor, ComponentHostBase } from '@hza/ui-components';

const DEFAULT_SUBTITLE_COLOR = 'orange';

export const _WidgetTitleBase = mixinTextColor(ComponentHostBase);

@Directive({
  selector: 'hza-widget-title, [hzaWidgetTitle]',
  inputs: ['color'],
  host: { class: 'hza-widget-title' },
})
export class WidgetTitleDirective extends _WidgetTitleBase implements HasColor {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

export const _WidgetSubtitleBase = mixinTextColor(ComponentHostBase, DEFAULT_SUBTITLE_COLOR);
@Directive({
  selector: 'hza-widget-subtitle, [hzaWidgetSubtitle]',
  inputs: ['color'],
  host: { class: 'hza-widget-subtitle' },
})
export class WidgetSubtitleDirective extends _WidgetSubtitleBase implements HasColor {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
