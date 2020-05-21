import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
// * wrappers
import { PanelWrapperComponent } from './wrappers/panel-wrapper.component';
import { ErrorWrapperComponent } from './wrappers/error.component';
// * types
import { RepeatSectionComponent } from './types/repeat-section.component';
// * components
import { FormComponent } from './components/form/form.component';
import { config } from './config';
import { DocDetailInput } from './types/doc-detail-input';
import { FormlyHorizontalWrapper } from './wrappers/FormlyHorizontalWrapper';
import { FormlyFieldCustomInput } from './types/custom-input.component';

const COMPONENTS = [
	PanelWrapperComponent,
	ErrorWrapperComponent,
	RepeatSectionComponent,
	FormlyHorizontalWrapper,
	FormlyFieldCustomInput,
	DocDetailInput,
	FormComponent
];

@NgModule({
	imports: [
		ReactiveFormsModule,
		FormsModule,
		FormlyMatDatepickerModule,
		FormlyMatToggleModule,
		FormlyMatDatepickerModule,
		FormlyModule.forRoot(config),
		FormlyMaterialModule,
		FormlyBootstrapModule
	],
	declarations: [
		COMPONENTS
	],
	exports: [
		COMPONENTS
	]
})
export class UiComponentsFormsModule {}
