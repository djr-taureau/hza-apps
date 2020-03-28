import { Field } from '../../helpers/fields';

export const DATE_INPUT = (disabled = true, label) => ({
	...Field.field('date', 'date', {
		label: label,
		description: label,
		disabled: disabled
	})
});
