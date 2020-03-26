import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
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
import { DatatableTypeComponent } from './datatable.type';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DemoDatatableComponent } from './components/demo-datatable/demo-datatable.component';
import { config } from './config';

const COMPONENTS = [
	PanelWrapperComponent,
	ErrorWrapperComponent,
	RepeatSectionComponent,
	FormComponent,
	DatatableTypeComponent,
	DataTableComponent,
	DemoDatatableComponent
];

@NgModule({
	imports: [
		ReactiveFormsModule,
		FormsModule,
		NgxDatatableModule,
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
export class UiFormComponentsModule {}
