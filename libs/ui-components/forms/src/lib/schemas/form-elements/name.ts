import { Field } from '../../helpers/fields';

const startTyping = true;

export const NAME = (disabled) => {
  const templateOptions = {
    label: 'Name',
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
