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

// ** used this for CAR and Doc detail
export const formFieldConfig = (formFields, type) => {
	let formConfigs: FormlyFieldConfig[] = [];
	formFields.map((v) => {
		const formConfig = new FormConfigBuilder()
			.cssSelector('')
			.key(v)
			.type(type)
			.templateOptions(v, '')
			.build();
		formConfigs.push(formConfig);
	});
	return formConfigs;
};

// ** for individual controls
export const formFieldConfigBuilder = (key, type, label, options, cssClass) => {
		const formConfig = new FormConfigBuilder()
			.cssSelector(cssClass)
			.key(key)
			.type(type)
			.templateOptions(label, cssClass, options)
			.build();
	return formConfig;
};

