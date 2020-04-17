import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';

const MODULES = [
	CommonModule,
	ClarityModule,
	SharedUtilsModule,
	UiComponentsLayoutsModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class LoansUiModule {}
