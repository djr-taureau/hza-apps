import { FormlyFieldConfig } from '@ngx-formly/core';
export class FormConfigBuilder {
	private readonly _formConfig: FormlyFieldConfig;

	constructor() {
		this._formConfig = {
			key: '',
			className: '',
			type: '',
			wrappers: [ 'flex', 'form-field' ],
			templateOptions: {
				fxLayout: 'row',
				fxLayoutAlign: 'space-between start',
				label: '',
				attributes: {
					class: ''
				}
			},
			expressionProperties: {
				// apply expressionProperty for disabled based on formState
				'templateOptions.disabled': 'formState.disabled',
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

	templateOptions(key: string, cssClass: string): FormConfigBuilder {
		this._formConfig.templateOptions.label = key;
		this._formConfig.templateOptions.attributes.class = cssClass;
		return this;
	}

	build(): FormlyFieldConfig {
		return this._formConfig;
	}
}
