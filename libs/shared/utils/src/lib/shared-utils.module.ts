import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './pipes/date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';
import { MaterialModule, PrimeNgModule } from './+modules';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FocusDirective } from './directives/focus/focus.directive';
import { CopyableDirective } from './directives/copyable.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { ExternalLinkDirective } from './directives/external-link.directive';
import { EmailLinkDirective } from './email-link.directive';
import { FontAwesomeIconModule } from './+modules/font-awesome-icon.module';

const COMPONENTS = [
	NiceDatePipe,
	ReplacePipe,
	AddressPipe,
	PhonePipe,
	CopyableDirective,
	TooltipDirective,
	FocusDirective,
	ExternalLinkDirective,
	EmailLinkDirective
];

const MODULES = [CommonModule, MaterialModule, PrimeNgModule, FontAwesomeIconModule, OverlayPanelModule, ButtonsModule];
@NgModule({
	imports: MODULES,
	declarations: COMPONENTS,
	exports: [COMPONENTS, MODULES]
})
export class SharedUtilsModule {}
