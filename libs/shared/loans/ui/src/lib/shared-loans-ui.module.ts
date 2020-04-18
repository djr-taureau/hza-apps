import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';
import { UiComponentsTableModule } from '@hza/ui-components/core-table';
import { UiComponentsOverlayModule } from '@hza/ui-components/overlay';
import { UiComponentsFormsModule } from '@hza/ui-components/forms';
import { UiComponentsButtonsModule } from '@hza/ui-components/buttons';


const MODULES = [
	CommonModule,
	ClarityModule,
	FormsModule,
	ReactiveFormsModule,
	SharedUtilsModule,
	UiComponentsLayoutsModule,
    UiComponentsButtonsModule,
	UiComponentsTableModule,
	UiComponentsOverlayModule,
	UiComponentsFormsModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class SharedLoansUiModule {}