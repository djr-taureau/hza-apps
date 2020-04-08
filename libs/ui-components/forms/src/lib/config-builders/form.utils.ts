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

export const formFieldConfig = (formFields, type) => {
	let formConfigs: FormlyFieldConfig[] = [];
	formFields.map((v) => {
		const formConfig = new FormConfigBuilder()
			.cssSelector('col-lg-2 col-form-label')
			.key(v)
			.type(type)
			.templateOptions(v, 'col-lg-10')
			.build();
		formConfigs.push(formConfig);
	});
	return formConfigs;
};

