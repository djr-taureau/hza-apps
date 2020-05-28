export interface FormBuilderModel {
	displayName: string;
	fieldName: string;
	fieldType: string;
	cssSelector: string;
	templateCssSelector: string;
	fxFlexAlignField?: string;
	fxLayoutAlignLabel?: string;
	fxFlexSpacer?: string;
	
}

export const docLoanDetailBorrower: FormBuilderModel[] = [
	{
		displayName: 'Borrower',
		fieldName: 'BorrowerPrimaryLastName',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-disabled right',
		fxFlexSpacer: '10'
	},
    	{
		displayName: 'Borrower SSN',
		fieldName: 'BorrowerSSN',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'medium-disabled long-date right',
		fxFlexAlignField: 'end center',
		fxFlexSpacer: '10'
	}
];
export const docLoanDetailCoBorrower: FormBuilderModel[] = [
    {
		displayName: 'Co',
		fieldName: 'BorrowerSecondaryFullName',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-disabled right',
		fxFlexAlignField: 'end center',
		fxFlexSpacer: '10'
	},
        {
		displayName: 'Co SSN',
		fieldName: 'BorrowerCoSSN',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'medium-disabled long-date right',
		fxFlexSpacer: '10'
	},
];

export const docLoanDetailInvestor: FormBuilderModel[] = [
    {
		displayName: 'Investor',
		fieldName: 'InvestorName',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-disabled right',
		fxFlexAlignField: 'end center',
		fxFlexSpacer: '10'
	}
];

export const docLoanDetailProperty: FormBuilderModel[] = [
    {
		displayName: 'Property',
		fieldName: 'PropertyStreet',
		fieldType: 'textarea',
		cssSelector: 'value property',
		templateCssSelector: 'x-wide-disabled',
		fxLayoutAlignLabel: 'start start',
		fxFlexAlignField: 'end center',
		fxFlexSpacer: '5'
	}
];
