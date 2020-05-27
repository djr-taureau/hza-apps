export interface FormBuilderModel {
	displayName: string;
	fieldName: string;
	fieldType: string;
	cssSelector: string;
	templateCssSelector: string;
	fxFlexField?: string;
}

export const docDetailFields: FormBuilderModel[] = [
	{
		displayName: 'Doc Type',
		fieldName: 'DocType',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-focus'
	},
    	{
		displayName: 'File Size',
		fieldName: 'FileSize',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'medium-focus',
		fxFlexField: 'end'
	},
    {
		displayName: 'Username',
		fieldName: 'CreatedBy',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'medium-focus',
		fxFlexField: 'end'
	},
        {
		displayName: 'Created',
		fieldName: 'CreatedDate',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-focus'
	},
];
