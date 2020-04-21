import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './pipes/date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {OverlayPanelModule} from 'primeng/overlaypanel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {SelectButtonModule} from 'primeng/selectbutton';
import { OpenFocusDirective } from './directives/open-focus.directive';
import { CopyableDirective } from './directives/copyable.directive';

const COMPONENTS = [
	NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe, OpenFocusDirective, CopyableDirective
];
@NgModule({
	imports: [CommonModule, MaterialModule, FontAwesomeModule, OverlayPanelModule, ButtonsModule, SelectButtonModule],
	declarations: COMPONENTS,
	exports: [MaterialModule, COMPONENTS, FontAwesomeModule, OverlayPanelModule, ButtonsModule, SelectButtonModule]
})
export class SharedUtilsModule {}
	