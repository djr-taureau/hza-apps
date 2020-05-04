import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';
import { UiComponentsTableModule } from '@hza/ui-components/core-table';
import { UiComponentsDataListModule } from '@hza/ui-components/data-list';
import { UiComponentsValueCalloutModule } from '@hza/ui-components/value-callout';
import { UiComponentsTextListModule } from '@hza/ui-components/text-list'
import { UiComponentsOverlayModule } from '@hza/ui-components/overlay';
import { UiComponentsFormsModule } from '@hza/ui-components/forms';

const MODULES = [
	CommonModule,
	ClarityModule,
	SharedUtilsModule,
	UiComponentsLayoutsModule,
	UiComponentsTableModule,
	UiComponentsDataListModule,
	UiComponentsValueCalloutModule,
	UiComponentsTextListModule,
	UiComponentsOverlayModule,
	UiComponentsFormsModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class DocumentsUiModule {}
