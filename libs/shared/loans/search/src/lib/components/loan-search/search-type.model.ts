export interface SearchType {
	
	key: number | string;
	label: string;
	message?: string;
	name: number;
}

export const companySearchTypes = [
	{ label: 'Any', key: 0, name: 10 },
	{ label: 'Fay', key: 1, name: 12 },
	{ label: 'Flagstar', key: 2, name: 14 }
];

export const loanSearchTypes = [
	{
		label: 'Loan',
		key: 'loan',
		name: 26,
		message: 'Full loan number must be provided (leading zeros are optional)'
	},
	{
		label: 'Borrower',
		key: 'borrower',
		name: 29,
		message: 'Search by the first few letters of first and/or last name'
	},
	{
		label: 'Co-Borrower',
		key: 'co-borrower',
		name: 32,
		message: 'Search by the first few letters of first and/or last name'
	},
	{ label: 'SSN', key: 'ssn', name: 35, message: 'Search by the last four  (or more) digits of the SSN' },
	{ label: 'Email', key: 'email', name: 38, message: 'Search by the first few characters of email address' },
	{ label: 'Phone', key: 'phone', name: 41, message: 'Search by the last four or more digits of phone number' },
	{ label: 'Address', key: 'address', name: 44, message: 'Search by the first few numbers or letters of addesss' },
	{ label: 'City', key: 'city', name: 47, message: 'Search by the first few letters of city' },
	{ label: 'Zip', key: 'zip', name: 50, message: 'Full five digits of zip code must be provided' }
];
