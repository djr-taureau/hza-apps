export interface FormBuilderModel {
	displayName: string;
	fieldName: string;
	fieldType: string;
	cssSelector: string;
	templateCssSelector: string;
}

export const docDetailFields: FormBuilderModel[] = [
	{
		displayName: 'Doc Type',
		fieldName: 'DocType',
		fieldType: 'custom',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-focus'
	},
    	{
		displayName: 'File Size',
		fieldName: 'FileSize',
		fieldType: 'custom',
		cssSelector: 'value',
		templateCssSelector: 'medium-focus'
	},
    {
		displayName: 'Username',
		fieldName: 'CreatedBy',
		fieldType: 'custom',
		cssSelector: 'value',
		templateCssSelector: 'medium-focus'
	},
        {
		displayName: 'Created',
		fieldName: 'CreatedDate',
		fieldType: 'custom',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-focus'
	},
];
