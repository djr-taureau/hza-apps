
import { Field } from './../../../helpers';

import { DATE_INPUT, EMAIL, COUNTRIES, MESSAGE } from '../';

export const DEFAULT_CAR_FORM = (disabled = true) => ({
  id: 'DEFAULT_CAR',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Car Detail'
      },
      fieldGroup: [
        DATE_INPUT(disabled, 'Created'),
        EMAIL(disabled),
        COUNTRIES(disabled),
        MESSAGE(disabled)
      ]
    }
  ]
});
