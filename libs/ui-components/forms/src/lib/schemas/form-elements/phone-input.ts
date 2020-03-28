import { Field } from '../../helpers/fields';

export const PHONE_INPUT = (disabled = true) => ({
  ...Field.field(
    'phone', 
    'phone', 
    { label: 'phone', disabled: disabled },
  )
});
