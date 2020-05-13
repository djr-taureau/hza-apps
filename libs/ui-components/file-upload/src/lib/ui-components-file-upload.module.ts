import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UiComponentsButtonsModule } from '@hza/ui-components/buttons';
import { UiComponentsAttachmentModule } from '@hza/ui-components/attachment';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SharedUtilsModule } from '@hza/shared/utils';

@NgModule({
  imports: [
    CommonModule,
    SharedUtilsModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    UiComponentsButtonsModule,
    UiComponentsAttachmentModule,
  ],
  exports: [FileUploadComponent],
  declarations: [FileUploadComponent],
})
export class UiComponentsFileUploadModule {}
