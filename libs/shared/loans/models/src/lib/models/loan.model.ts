export interface Loan {
	loanNumber: string;
	sourceID: number;
	source: string;
	borrower: string;
	coBorrower: string;
	borrowerPrimarySSN: string;
	borrowerSecondarySSN: string;
	borrowerPrimaryEmailAddress: string;
	borrowerPrimaryPhoneNumber: string;
	borrowerSecondaryPhoneNumber: string;
	propertyAddress1: string;
	propertyCity: string;
}

export interface LoanDetail {
	borrower: string;
	borrowerPrimarySSN: string;
	coBorrower: string;
	borrowerSecondarySSN: string;
	propertyAddress1: string;
	propertyCity: string;
}

export function toLoanFormValue<T extends LoanDetail>(data: T): LoanDetail {
	return {
		borrower: data.borrower,
		borrowerPrimarySSN: data.borrowerPrimarySSN,
		coBorrower: data.coBorrower,
		borrowerSecondarySSN: data.borrowerSecondarySSN,
		propertyAddress1: data.propertyAddress1,
		propertyCity: data.propertyCity
	};
}

export const mockLoan1: Loan = {
	sourceID: 1,
	source: 'Fay',
	loanNumber: '0000015864',
	borrower: 'JEFFERY BARRON',
	coBorrower: 'MICHELLE BARRON',
	borrowerPrimarySSN: 'xxx-xx-6553',
	borrowerSecondarySSN: 'xxx-xx-7172',
	borrowerPrimaryEmailAddress: 'JMPROTEK@MTAONLINE.NET',
	borrowerPrimaryPhoneNumber: '9078926021',
	borrowerSecondaryPhoneNumber: null,
	propertyAddress1: '11765W BALLYSHANNON',
	propertyCity: 'HOUSTON'
};

export const mockLoan2: Loan = {
	sourceID: 1,
	source: 'Fay',
	loanNumber: '0000016534',
	borrower: 'MIGUEL RIOS',
	coBorrower: null,
	borrowerPrimarySSN: 'xxx-xx-2458',
	borrowerSecondarySSN: '',
	borrowerPrimaryEmailAddress: null,
	borrowerPrimaryPhoneNumber: '7132050366',
	borrowerSecondaryPhoneNumber: '7136579592',
	propertyAddress1: '11111  CLARK RD',
	propertyCity: 'HOUSTON'
};
