import { FormlyFieldConfig } from '@ngx-formly/core';
import { loanSearchTypes } from './search-type.model';
export class SearchLoan {
	company: string;

	formFields() {
		return <FormlyFieldConfig>{
			key: 'loan',
			type: 'radio',
			className: 'quick-buttons',
			templateOptions: {
				type: 'radio',
				label: '',
				required: true,
				name: 'loan',
                options: loanSearchTypes
			}
		};
	}
}
