export interface LoanQuery {
	company: string;
	loan: string;
	loanSearch: string;
}

export const defaultQuery: LoanQuery = {
	company: '0',
	loan: 'loan',
	loanSearch: ''
};

export const mockLoanQuery: LoanQuery = {
	company: '0',
	loan: 'city',
	loanSearch: 'Houston'
};



export function toSearchFormValue<T extends LoanQuery>(data: T): LoanQuery {
  return {
    company: data.company,
    loan: data.loan,
    loanSearch: data.loanSearch,
  }
}

export function searchMessages(value: string): string {
	let message: string = '';
	switch (value) {
		case 'loan':
			message = 'Full loan number must be provided (leading zeros are optional)';
			break;
		case 'borrower':
			message = 'Search by the first few letters of first and/or last name';
			break;
		case 'coborrower':
			message = 'Search by the first few letters of first and/or last name';
			break;
		case 'ssn':
			message = 'Search by the last four  (or more) digits of the SSN';
			break;
		case 'email':
			message = 'Search by the first few characters of email address';
			break;
		case 'phone':
			message = 'Search by the last four or more digits of phone number';
			break;
		case 'address':
			message = 'Search by the first few numbers or letters of addesss';
			break;
		case 'city':
			message = 'Search by the first few letters of city';
			break;
		case 'zip':
			message = 'Full five digits of zip code must be provided';
			break;
		default:
			message = '';
			break;
	}

	return message;
}
