import { FormlyFieldConfig } from '@ngx-formly/core';
export class FormConfigBuilder {
	private readonly _formConfig: FormlyFieldConfig;

	constructor() {
		this._formConfig = {
			key: '',
			className: '',
			type: '',
			// wrappers: ['form-field-horizontal'],
			templateOptions: {
				label: '',
				attributes: {
					class: ''
				},
				options: []
			},
			expressionProperties: {
				// apply expressionProperty for disabled based on formState
				'templateOptions.disabled': 'formState.disabled'
			}
		};
	}

	key(key: string): FormConfigBuilder {
		this._formConfig.key = key;
		return this;
	}

	cssSelector(className: string): FormConfigBuilder {
		this._formConfig.className = className;
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

	templateOptions(key: string, cssClass?: string, options?: any[]): FormConfigBuilder {
		this._formConfig.templateOptions.label = key;
		this._formConfig.templateOptions.attributes.class = cssClass;
		return this;
	}

	build(): FormlyFieldConfig {
		return this._formConfig;
	}
}
