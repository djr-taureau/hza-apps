import * as _ from 'lodash';
import { FormConfigBuilder } from '../config-builders/form-config-builder.class';
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
		const formConfig = new FormConfigBuilder().key(v).templateOptions(v).build();
		formConfigs.push(formConfig);
	});
	return formConfigs;
};

