export interface SearchType {
	key: string;
	value: number | string;
	message?: string;
	name: number;
}

export const companySearchTypes = [
	{ key: 'Any', value: 0, name: 10 },
	{ key: 'Fay', value: 1, name: 12 },
	{ key: 'Flagstar', value: 2, name: 14 }
];

export const loanSearchTypes = [
	{
		key: 'Loan',
		value: 'loan',
		name: 26,
		message: 'Full loan number must be provided (leading zeros are optional)'
	},
	{
		key: 'Borrower',
		value: 'borrower',
		name: 29,
		message: 'Search by the first few letters of first and/or last name'
	},
	{
		key: 'Co-Borrower',
		value: 'co-borrower',
		name: 32,
		message: 'Search by the first few letters of first and/or last name'
	},
	{ key: 'SSN', value: 'ssn', name: 35, message: 'Search by the last four  (or more) digits of the SSN' },
	{ key: 'Email', value: 'email', name: 38, message: 'Search by the first few characters of email address' },
	{ key: 'Phone', value: 'phone', name: 41, message: 'Search by the last four or more digits of phone number' },
	{ key: 'Address', value: 'address', name: 44, message: 'Search by the first few numbers or letters of addesss' },
	{ key: 'City', value: 'city', name: 47, message: 'Search by the first few letters of city' },
	{ key: 'Zip', value: 'zip', name: 50, message: 'Full five digits of zip code must be provided' }
];
