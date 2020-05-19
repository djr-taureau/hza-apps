import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsAttachmentModule } from '@hza/ui-components/attachment';
import { UiComponentsButtonsModule } from '@hza/ui-components/buttons';
import { NgxFileDropModule } from 'ngx-file-drop';
import { DndDirective } from './file-upload-custom/dnd.directive';
import { FileUploadCustomComponent } from './file-upload-custom/file-upload-custom.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './progress/progress.component';


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
  declarations: [FileUploadComponent, FileUploadCustomComponent, DndDirective, ProgressComponent],
  exports: [FileUploadComponent, FileUploadCustomComponent, DndDirective, ProgressComponent],
  
})
export class UiComponentsFileUploadModule {}
