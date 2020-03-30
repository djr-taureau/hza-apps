import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './pipes/date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';
import { MaterialModule } from './material.module';
import { OpenFocusDirective } from './directives/open-focus.directive';

@NgModule({
	imports: [CommonModule, MaterialModule],
	declarations: [NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe, OpenFocusDirective],
	exports: [MaterialModule, NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe, OpenFocusDirective]
})
export class SharedUtilsModule {}
