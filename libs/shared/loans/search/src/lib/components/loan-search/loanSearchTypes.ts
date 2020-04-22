import * as _ from 'lodash';
import { indexByProp } from '@hza/shared/utils';
export const loanSearchTypes = [
	{
		value: 'loan',

		message: 'Full loan number must be provided (leading zeros are optional)'
	},
	{
		value: 'borrower',

		message: 'Search by the first few letters of first and/or last name'
	},
	{
		value: 'co-borrower',

		message: 'Search by the first few letters of first and/or last name'
	},
	{ value: 'ssn', message: 'Search by the last four  (or more) digits of the SSN' },
	{ value: 'email', message: 'Search by the first few characters of email address' },
	{ value: 'phone', message: 'Search by the last four or more digits of phone number' },
	{ value: 'address', message: 'Search by the first few numbers or letters of addesss' },
	{ value: 'city', message: 'Search by the first few letters of city' },
	{ value: 'zip', message: 'Full five digits of zip code must be provided' }
];

export const helpMessages = indexByProp('value', loanSearchTypes);