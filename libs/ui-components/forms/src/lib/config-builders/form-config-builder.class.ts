import { FormlyFieldConfig } from '@ngx-formly/core';
export class FormConfigBuilder {
	private readonly _formConfig: FormlyFieldConfig;


	constructor() {
		this._formConfig = {
			key: '',
			type: 'input',
			templateOptions: {
				label: ''
			}
		};
	}

	key(key: string): FormConfigBuilder {
		this._formConfig.key = key;
		return this;
	}

	// expressionProperties(key: string): FormConfigBuilder {
	// 	this._formConfig.expressionProperties = Object.assign({}, `model.${key}` : `model.${key}` );
	// 	return this;
	// }

	type(type: string): FormConfigBuilder {
		this._formConfig.type = type;
		return this;
	}

	templateOptions(key: string): FormConfigBuilder {
		this._formConfig.templateOptions.label = key;
		return this;
	}

	build(): FormlyFieldConfig {
		return this._formConfig;
	}
}
