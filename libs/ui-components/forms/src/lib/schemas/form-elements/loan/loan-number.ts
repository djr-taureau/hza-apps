import { Field } from '../../../helpers/fields';
import { constants } from 'fs';

const startTyping = false;

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
