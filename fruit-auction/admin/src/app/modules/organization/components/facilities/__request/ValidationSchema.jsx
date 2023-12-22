
import * as Yup from 'yup';


export const ValidationSchema = Yup.object({
  
  npi: Yup.string()
    .min(10, 'The NPI field must be 10 characters!')
    .max(10, 'The NPI field must be 10 characters!')
    .required('NPI field is required'),

  name: Yup.string()
    .required('First name field is required'),


  address_line_1: Yup.string()
    .required('Address Line 1 field is required'),

  city: Yup.string()
    .required('City field is required'),

  state: Yup.string()
    .required('State field is required'),

  zip_code: Yup.string()
    .required('Zip Code field is required'),

  phone: Yup.string()
    .required('Phone field is required'),

  //   fax: Yup.string()
  //   .required('fax field is required'),

  // email: Yup.string()
  //   .email('Invalid email')
  //   .required('email field is required'),

 

});

