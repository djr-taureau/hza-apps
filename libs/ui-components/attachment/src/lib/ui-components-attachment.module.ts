import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachmentComponent } from './attachment/attachment.component';
import { MatCardModule } from '@angular/material/card'; 
import { UiComponentsButtonsModule } from '@hza/ui-components/buttons';
import { SharedUtilsModule } from '@hza/shared/utils';


@NgModule({
  imports: [CommonModule, MatCardModule, UiComponentsButtonsModule, SharedUtilsModule],
  declarations: [AttachmentComponent],
  exports: [AttachmentComponent],
})
export class UiComponentsAttachmentModule {}
