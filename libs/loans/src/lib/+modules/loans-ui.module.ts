import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilsModule } from '@hza/shared/utils';



const MODULES = [
	CommonModule,
	SharedUtilsModule,
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class LoansUiModule {}
