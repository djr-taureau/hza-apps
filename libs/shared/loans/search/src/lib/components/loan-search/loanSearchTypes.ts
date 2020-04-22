export const loanSearchTypes = [
	{
        id: 16,
		label: 'Loan',
		value: 'loan',
	
		message: 'Full loan number must be provided (leading zeros are optional)'
	},
	{
        id: 18,
		label: 'Borrower',
		value: 'borrower',

		message: 'Search by the first few letters of first and/or last name'
	},
	{
        id: 20,
		label: 'Co-Borrower',
		value: 'co-borrower',

		message: 'Search by the first few letters of first and/or last name'
	},
	{ id: 22, label: 'SSN', value: 'ssn',  message: 'Search by the last four  (or more) digits of the SSN' },
	{ id: 24, label: 'Email', value: 'email', message: 'Search by the first few characters of email address' },
	{ id: 26, label: 'Phone', value: 'phone', message: 'Search by the last four or more digits of phone number' },
	{ id: 28, label: 'Address', value: 'address',  message: 'Search by the first few numbers or letters of addesss' },
	{ id: 30, label: 'City', value: 'city', message: 'Search by the first few letters of city' },
	{ id: 32, label: 'Zip', value: 'zip',  message: 'Full five digits of zip code must be provided' }
];