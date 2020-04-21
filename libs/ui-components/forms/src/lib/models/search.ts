import { FormlyFieldConfig } from "@ngx-formly/core";

export class Search {
	search: string;

	formFields() {
		return <FormlyFieldConfig>{
			key: 'search',
			type: 'input',
			className: 'seach-input',
			templateOptions: {
				type: 'text',
				label: 'search',
				required: true
			}
		};
	}
}
