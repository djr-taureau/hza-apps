export interface FormBuilderModel {
	displayName: string;
	fieldName: string;
	fieldType: string;
	cssSelector: string;
	templateCssSelector: string;
	fxFlexAlignField?: string;
}

export const docLoanDetailBorrower: FormBuilderModel[] = [
	{
		displayName: 'Borrower',
		fieldName: 'BorrowerPrimaryLastName',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-disabled right'
	},
    	{
		displayName: 'Borrower SSN',
		fieldName: 'BorrowerSSN',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'medium-disabled long-date right',
		fxFlexAlignField: 'end center'
	}
];
export const docLoanDetailCoBorrower: FormBuilderModel[] = [
    {
		displayName: 'Co Borrower',
		fieldName: 'BorrowerSecondaryFullName',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-disabled right',
		fxFlexAlignField: 'end center'
	},
        {
		displayName: 'Co Borrower SSN',
		fieldName: 'BorrowerCoSSN',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'medium-disabled long-date right'
	},
];

export const docLoanDetailInvestor: FormBuilderModel[] = [
    {
		displayName: 'Investor',
		fieldName: 'InvestorName',
		fieldType: 'input',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-disabled right',
		fxFlexAlignField: 'end center'
	}
];

export const docLoanDetailProperty: FormBuilderModel[] = [
    {
		displayName: 'Property',
		fieldName: 'PropertyStreet',
		fieldType: 'textarea',
		cssSelector: 'value',
		templateCssSelector: 'x-wide-disabled',
		fxFlexAlignField: 'end center'
	}
];
