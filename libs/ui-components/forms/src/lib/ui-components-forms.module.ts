import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
// * components
import { FormComponent } from './components/form/form.component';
import { config } from './config';
import { FormlyFieldCustomInput } from './types/custom-input.component';
import { DocDetailInput } from './types/doc-detail-input';
import { FlexLayoutType } from './types/flex-layout.type';
// * types
import { RepeatSectionComponent } from './types/repeat-section.component';
import { ErrorWrapperComponent } from './wrappers/error.component';
import { FlexContainerWrapperComponent } from './wrappers/flex-container-wrapper.component';
import { FlexWrapperComponent } from './wrappers/flex-wrapper.component';
// * wrappers
import { FlexPanelWrapperComponent } from './wrappers/flex-panel-wrapper.component';

const COMPONENTS = [
  FlexPanelWrapperComponent,
  ErrorWrapperComponent,
  RepeatSectionComponent,
  FormlyFieldCustomInput,
  DocDetailInput,
  FormComponent,
  FlexLayoutType,
  FlexContainerWrapperComponent,
  FlexWrapperComponent,
];

@NgModule({
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,
    FormlyMatDatepickerModule,
    FormlyMaterialModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(config),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class UiComponentsFormsModule {}
