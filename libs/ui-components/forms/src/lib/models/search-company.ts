import { FormlyFieldConfig } from '@ngx-formly/core';
import { companySearchTypes } from './search-type.model';
export class SearchLoan {
	company: string;

	formFields() {
		return <FormlyFieldConfig>{
			key: 'company',
			type: 'radio',
			className: 'quick-buttons',
			templateOptions: {
				type: 'radio',
				label: '',
				required: true,
				name: 'company',
                options: companySearchTypes
			}
		};
	}
}
