import {
	maxlengthValidationMessage,
	maxValidationMessage,
	minlengthValidationMessage,
	minValidationMessage
} from './helpers/validations-messages';
import { maximumMoneyValidation } from './helpers/validators';
import { PanelWrapperComponent } from './wrappers/panel-wrapper.component';
import { RepeatSectionComponent } from './types/repeat-section.component';
// import { FormlyFieldInputMoney } from './types/money.component';
// import { FormlyFieldInputPercentage } from './types/percentage.component';
import { ErrorWrapperComponent } from './wrappers/error.component';
import { ConfigOption } from '@ngx-formly/core';
import { DatatableTypeComponent } from './datatable.type';
import { DataTableComponent } from './components/data-table/data-table.component';
// import { FormlyFieldInputPhone } from './types/phone.component';
// import { FormlyFieldInputDate } from './types/date.component';

export const config: ConfigOption = {
	validationMessages: [
		{ name: 'required', message: 'This field is required' },
		{ name: 'minlength', message: minlengthValidationMessage },
		{ name: 'maxlength', message: maxlengthValidationMessage },
		{ name: 'min', message: minValidationMessage },
		{ name: 'max', message: maxValidationMessage },
		{ name: 'maximumMoneyValidation', message: 'should be 100' }
	],
	wrappers: [
		{ name: 'panel', component: PanelWrapperComponent },
		{ name: 'error-on-top', component: ErrorWrapperComponent }
	],
	types: [
		{
			name: 'datatable',
			component: DatatableTypeComponent,
			defaultOptions: {
				templateOptions: {
					columnMode: 'force',
					rowHeight: 'auto',
					headerHeight: '40',
					footerHeight: '40',
					limit: '10',
					scrollbarH: 'true',
					reorderable: 'reorderable'
				}
			}
		},
		{ name: 'repeat', component: RepeatSectionComponent },
		// { name: 'money', component: FormlyFieldInputMoney },
		// { name: 'percentage', component: FormlyFieldInputPercentage },
		// { name: 'phone', component: FormlyFieldInputPhone },
		// { name: 'date', component: FormlyFieldInputDate }
	],
	validators: [
		{ name: 'maximumMoneyValidation', validation: maximumMoneyValidation }
	]
};
