export interface SearchType {
	label: string;
	value: number | string;
	message?: string;
	name: number;
}

export const companySearchTypes = [
	{ label: 'Any', value: 0, name: 10 },
	{ label: 'Fay', value: 1, name: 12 },
	{ label: 'Flagstar', value: 2, name: 14 }
];

export const loanSearchTypes = [
	{
		label: 'Loan',
		value: 'loan',
		name: 26,
		message: 'Full loan number must be provided (leading zeros are optional)'
	},
	{
		label: 'Borrower',
		value: 'borrower',
		name: 29,
		message: 'Search by the first few letters of first and/or last name'
	},
	{
		label: 'Co-Borrower',
		value: 'co-borrower',
		name: 32,
		message: 'Search by the first few letters of first and/or last name'
	},
	{ label: 'SSN', value: 'ssn', name: 35, message: 'Search by the last four  (or more) digits of the SSN' },
	{ label: 'Email', value: 'email', name: 38, message: 'Search by the first few characters of email address' },
	{ label: 'Phone', value: 'phone', name: 41, message: 'Search by the last four or more digits of phone number' },
	{ label: 'Address', value: 'address', name: 44, message: 'Search by the first few numbers or letters of addesss' },
	{ label: 'City', value: 'city', name: 47, message: 'Search by the first few letters of city' },
	{ label: 'Zip', value: 'zip', name: 50, message: 'Full five digits of zip code must be provided' }
];
