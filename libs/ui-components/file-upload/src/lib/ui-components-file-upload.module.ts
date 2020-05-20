import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsAttachmentModule } from '@hza/ui-components/attachment';
import { UiComponentsButtonsModule } from '@hza/ui-components/buttons';
import { NgxFileDropModule } from 'ngx-file-drop';
import { DndDirective } from './file-upload-custom/dnd.directive';
import { FileUploadCustomComponent } from './file-upload-custom/file-upload-custom.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './progress/progress.component';
import { UploadComponent } from './upload/upload.component';
import { DialogComponent } from './upload/dialog/dialog.component';
import { UploadService } from './upload/upload.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedUtilsModule,
    FormsModule,
    UiComponentsButtonsModule,
    NgxFileDropModule,
    UiComponentsAttachmentModule,
  ],
  declarations: [DialogComponent, UploadComponent, FileUploadComponent, FileUploadCustomComponent, DndDirective, ProgressComponent],
  exports: [DialogComponent, UploadComponent, FileUploadComponent, FileUploadCustomComponent, DndDirective, ProgressComponent],
  providers: [UploadService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class UiComponentsFileUploadModule {}
