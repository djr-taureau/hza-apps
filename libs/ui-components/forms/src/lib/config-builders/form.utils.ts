import * as _ from 'lodash';
import { FormConfigBuilder } from '../config-builders/form-config-builder.class';
import { FormBuilderModel } from '../config-builders/form-builder.model';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const formFields = (fields) => {
	const removeNulls = _.omitBy(fields, _.isNull);
	return _.keys(removeNulls);
};

export const formFieldDefaults = (fields, props: string[]) => {
	const defaultFields = _.pick(fields, props);
	return _.keys(defaultFields);
};

export const formFieldConfig = (formFields: FormBuilderModel[]) => {

	const formConfigs: FormlyFieldConfig[] = [];
	formFields.map((v) => {
		const formConfig = new FormConfigBuilder()
			.cssSelector(v.cssSelector)
			.key(v.fieldName)
			.type(v.fieldType)
			.templateOptions(v.displayName, v.templateCssSelector, v.fxFlexAlignField, v.fxFlexSpacer, v.fxLayoutAlignLabel)
			.build();
		formConfigs.push(formConfig);
	});
	return formConfigs;
};

