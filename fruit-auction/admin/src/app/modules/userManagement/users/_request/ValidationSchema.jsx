// import * as Yup from 'yup';
// export const ValidationSchema = Yup.object({
    
//     password: Yup.string().required('Password is required'),
//     confirm_password: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//   })

import * as Yup from 'yup';

export const ValidationSchema = Yup.object({

  email: Yup.string()
  .required('email is required'),

  phone: Yup.string()
  .required('phone is required'),

  first_name: Yup.string()
  .required('first_name is required'),

  last_name: Yup.string()
  .required('last_name is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'The password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'The password must contain at least one uppercase and one lowercase letter'
    ),
    password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

