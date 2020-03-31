import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './pipes/date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';
import { MaterialModule } from './material.module';
import { OpenFocusDirective } from './directives/open-focus.directive';
import { CopyableDirective } from './directives/copyable.directive';

const COMPONENTS = [
	NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe, OpenFocusDirective, CopyableDirective
];
@NgModule({
	imports: [CommonModule, MaterialModule],
	declarations: COMPONENTS,
	exports: [MaterialModule, COMPONENTS]
})
export class SharedUtilsModule {}
