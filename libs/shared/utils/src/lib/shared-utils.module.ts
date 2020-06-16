import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './pipes/date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';
import { MaterialModule, PrimeNgModule } from './+modules';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FocusDirective, MatInputFocusDirective } from './directives/focus/focus.directive';
import { CopyableDirective } from './directives/copyable.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { FontAwesomeIconModule } from './+modules/font-awesome-icon.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileSizePipe } from './directives/file-size/file-size.pipe';
import { Focus2Directive } from './directives/focus/focus2.directive';

const COMPONENTS = [
	NiceDatePipe,
	ReplacePipe,
	AddressPipe,
	PhonePipe,
	CopyableDirective,
	TooltipDirective,
	FocusDirective,
	MatInputFocusDirective,
	FileSizePipe,
	Focus2Directive
];

const MODULES = [CommonModule, MaterialModule, PrimeNgModule, FontAwesomeIconModule, OverlayPanelModule, ButtonsModule, NgxDatatableModule];
@NgModule({
	imports: MODULES,
	declarations: COMPONENTS,
	exports: [COMPONENTS, MODULES]
})
export class SharedUtilsModule {}
