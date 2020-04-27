
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './pipes/date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FocusDirective } from './directives/focus/focus.directive';
import { CopyableDirective } from './directives/copyable.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

const COMPONENTS = [NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe, CopyableDirective, TooltipDirective, FocusDirective];
@NgModule({
	imports: [CommonModule, MaterialModule, FontAwesomeModule, OverlayPanelModule, ButtonsModule],
	declarations: COMPONENTS,
	exports: [MaterialModule, COMPONENTS, FontAwesomeModule, OverlayPanelModule, ButtonsModule]
})
export class SharedUtilsModule {}
