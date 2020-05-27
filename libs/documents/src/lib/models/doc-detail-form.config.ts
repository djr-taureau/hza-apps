export interface FormBuilderModel {
	displayName: string;
	fieldName: string;
	fieldType: string;
	cssSelector: string;
	templateCssSelector: string;
	fxFlexAlignField?: string;
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
		fxFlexAlignField: 'end center'
	},
    {
		displayName: 'Username',
		fieldName: 'CreatedBy',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'medium-focus',
		fxFlexAlignField: 'end center'
	},
        {
		displayName: 'Created',
		fieldName: 'CreatedDate',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-focus'
	},
];
