import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';
import { UiComponentsTableModule } from '@hza/ui-components/core-table';
import { UiComponentsDataListModule } from '@hza/ui-components/data-list';
import { UiComponentsOverlayModule } from '@hza/ui-components/overlay';
import { UiComponentsFormsModule } from '@hza/ui-components/forms';
import { UiComponentsIconsModule } from '@hza/ui-components/icons';
import { UiComponentsFileUploadModule } from '@hza/ui-components/file-upload';

const MODULES = [
  CommonModule,
  ClarityModule,
  SharedUtilsModule,
  UiComponentsLayoutsModule,
  UiComponentsTableModule,
  UiComponentsDataListModule,
  UiComponentsOverlayModule,
  UiComponentsFormsModule,
  UiComponentsIconsModule,
  UiComponentsFileUploadModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class DocumentsUiModule {}
