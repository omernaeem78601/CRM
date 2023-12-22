import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
  npi: Yup.string()
    .min(10, 'The NPI field must be 10 characters!')
    .max(10, 'The NPI field must be 10 characters!')
    .required('NPI field is required'),

  first_name: Yup.string()
    .required('First name field is required'),

  last_name: Yup.string()
    .required('Last name field is required'),

});

