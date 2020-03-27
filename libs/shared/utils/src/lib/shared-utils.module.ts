import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './pipes/date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';
import { MaterialModule } from './material.module';

@NgModule({
	imports: [CommonModule, MaterialModule],
	declarations: [NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe],
	exports: [MaterialModule, NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe]
})
export class SharedUtilsModule {}
