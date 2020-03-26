import { Field } from '../../../helpers/fields';

let startTyping = false;

export const LOAN_NUMBER = (disabled) => {
  const templateOptions = {
    label: 'Loan Number',
    required: true,
    disabled: disabled
  };

  return {
    ...Field.input(
      'name',
      {
        ...templateOptions
      }
    )
  };
};
