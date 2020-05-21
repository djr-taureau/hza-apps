import * as _ from 'lodash';
import { FormConfigBuilder } from './form-config-builder.class';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const formFields = (fields) => {
	const removeNulls = _.omitBy(fields, _.isNull);
	return _.keys(removeNulls);
};

export const formFieldDefaults = (fields, props: string[]) => {
	const defaultFields = _.pick(fields, props);
	return _.keys(defaultFields);
};

export const formFieldConfig = (formFields) => {

	let formConfigs: FormlyFieldConfig[] = [];
	formFields.map((v) => {
		console.log('from field config', v);
		const formConfig = new FormConfigBuilder()
			.cssSelector(v.cssSelector)
			.key(v.fieldName)
			.type(v.fieldType)
			.templateOptions(v.displayName, v.templateCssSelector)
			.build();
		formConfigs.push(formConfig);
	});
	return formConfigs;
};

