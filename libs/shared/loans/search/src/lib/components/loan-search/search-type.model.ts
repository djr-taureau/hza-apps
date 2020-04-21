import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';

// export interface SearchType {

// 	key: number | string;
// 	label: string;
// 	message?: string;
// 	name: number;
// }

export const companySearchOptions = [{ value: 'Any', key: 0 }, { value: 'Fay', key: 1 }, { value: 'Flagstar', key: 2 }];

export const loanSearchOptions = [
	{
		value: 'Loan',
		key: 'loan'
	},
	{
		value: 'Borrower',
		key: 'borrower'
	},
	{
		value: 'Co-Borrower',
		key: 'co-borrower'
	},
	{ value: 'SSN', key: 'ssn' },
	{ value: 'Email', key: 'email' },
	{ value: 'Phone', key: 'phone' },
	{ value: 'Address', key: 'address' },
	{ value: 'City', key: 'city' },
	{ value: 'Zip', key: 'zip' }
];

// export const loanSearchTypes = [
// 	{
// 		label: 'Loan',
// 		key: 'loan',
// 		name: 26,
// 		message: 'Full loan number must be provided (leading zeros are optional)'
// 	},
// 	{
// 		label: 'Borrower',
// 		key: 'borrower',
// 		name: 29,
// 		message: 'Search by the first few letters of first and/or last name'
// 	},
// 	{
// 		label: 'Co-Borrower',
// 		key: 'co-borrower',
// 		name: 32,
// 		message: 'Search by the first few letters of first and/or last name'
// 	},
// 	{ label: 'SSN', key: 'ssn', name: 35, message: 'Search by the last four  (or more) digits of the SSN' },
// 	{ label: 'Email', key: 'email', name: 38, message: 'Search by the first few characters of email address' },
// 	{ label: 'Phone', key: 'phone', name: 41, message: 'Search by the last four or more digits of phone number' },
// 	{ label: 'Address', key: 'address', name: 44, message: 'Search by the first few numbers or letters of addesss' },
// 	{ label: 'City', key: 'city', name: 47, message: 'Search by the first few letters of city' },
// 	{ label: 'Zip', key: 'zip', name: 50, message: 'Full five digits of zip code must be provided' }
// ];

export const searchFields = [
	{
		fieldGroupClassName: 'row',
		fieldGroup: [
			{
				className: 'col-7 titre_modules',
				key: 'modules',
				type: 'radio',
				templateOptions: {
					type: 'array',
					label: 'Company',
					options: of([
						{ value: '0', label: 'Any' },
						{ value: '1', label: 'Fay' },
						{ value: '2', label: 'Flagstar' }
					])
				}
			},
			{
				className: 'col-5 titre_modules',
				key: 'roles',
				type: 'multicheckbox',
				templateOptions: {
					label: '',
					options: [],
					type: 'array'
				}
			}
		]
	},
	{
		fieldGroupClassName: 'row',
		fieldGroup: [
			{
				className: 'col-7 titre_modules',
				key: 'modules',
				type: 'radio',
				templateOptions: {
					type: 'array',
					label: 'loan',
					options: of([
						{ value: 'loan', label: 'Loan' },
						{ value: 'borrower', label: 'Borrower' },
						{ value: 'coborrower', label: 'Co-Borrower' },
						{ value: 'ssn', label: 'SSN' },
						{ value: 'email', label: 'Email' },
						{ value: 'address', label: 'Address' },
						{ value: 'city', label: 'City' },
						{ value: 'zip', label: 'Zip' }
					])
				}
			},
			{
				className: 'col-5 titre_modules',
				key: 'roles',
				type: 'multicheckbox',
				templateOptions: {
					label: '',
					options: [],
					type: 'array'
				}
			}
		]
	}
];

export const searchOptions: FormlyFieldConfig[] = [
	{
		key: 'company',
		type: 'radio',
		templateOptions: {
			name: '',
			options: companySearchOptions
		}
	},
	{
		key: 'loan',
		type: 'radio',
		templateOptions: {
			name: '',
			options: loanSearchOptions
		}
	}
];
