import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';
import { UiComponentsTableModule } from '@hza/ui-components/core-table';
import { UiComponentsOverlayModule } from '@hza/ui-components/overlay';
import { UiComponentsFormsModule } from '@hza/ui-components/forms';

const MODULES = [
	CommonModule,
	ClarityModule,
	SharedUtilsModule,
	UiComponentsLayoutsModule,
	UiComponentsTableModule,
	UiComponentsOverlayModule,
	UiComponentsFormsModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class DocumentsUiModule {}
