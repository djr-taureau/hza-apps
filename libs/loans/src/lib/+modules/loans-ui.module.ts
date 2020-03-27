import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { SharedUtilsModule } from '@hza/shared/utils';



const MODULES = [
	CommonModule,
	ClarityModule,
	SharedUtilsModule,
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class LoansUiModule {}
