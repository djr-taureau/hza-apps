//tslint:disable:component-selector use-host-property-decorator use-input-property-decorator
import { Component, OnInit, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
  'hza-button',
  'hza-rounded-button',
  'hza-round-button',
  'hza-icon-button',
  'hza-text-button',
];

@Component({
  selector:
    'button[hza-button],button[hza-icon-button],button[hza-rounded-button],button[hza-round-button],button[hza-text-button]',
  exportAs: 'hzaButton',
  host: {
    '[disabled]': 'disabled || null',
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  inputs: ['disabled', 'color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  constructor(elementRef: ElementRef) {

  }

}
