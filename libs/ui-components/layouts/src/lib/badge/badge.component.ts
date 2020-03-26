//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'hza-badge, [hzaBadge]',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  host: { class: 'hza-badge' },
})
export class BadgeComponent {
  @Input()
  @HostBinding('class.with-dot')
  useDot = false;
}
