import {
  maxlengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage,
} from './helpers/validations-messages';
import { FlexPanelWrapperComponent } from './wrappers/flex-panel-wrapper.component';
import { RepeatSectionComponent } from './types/repeat-section.component';
import { DocDetailInput } from './types/doc-detail-input';
import { FormlyFieldCustomInput } from './types/custom-input.component';
import { ErrorWrapperComponent } from './wrappers/error.component';
import { ConfigOption } from '@ngx-formly/core';

import { FlexLayoutType } from './types/flex-layout.type';
import { FlexContainerWrapperComponent } from './wrappers/flex-container-wrapper.component';
import { FlexWrapperComponent } from './wrappers/flex-wrapper.component';

export const config: ConfigOption = {
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'minlength', message: minlengthValidationMessage },
    { name: 'maxlength', message: maxlengthValidationMessage },
    { name: 'min', message: minValidationMessage },
    { name: 'max', message: maxValidationMessage },
  ],
  wrappers: [
    { name: 'error-on-top', component: ErrorWrapperComponent },
    { name: 'flex-container', component: FlexContainerWrapperComponent },
    { name: 'hza-flex', component: FlexWrapperComponent },
    { name: 'flex-container-panel', component: FlexPanelWrapperComponent },
  ],
  types: [
    { name: 'repeat', component: RepeatSectionComponent },
    { name: 'detail-disabled', component: DocDetailInput },
    {
      name: 'custom',
      component: FormlyFieldCustomInput,
      wrappers: ['form-field'],
    },
    { name: 'flex-layout', component: FlexLayoutType },
  ],
  validators: [],
};
