
import * as Yup from 'yup';


export const ValidationSchema = Yup.object({

    first_name: Yup.string()
        .required('first_name field is required'),

    last_name: Yup.string()
        .required('last name field is required'),

    phone: Yup.string()
        .required('Phone field is required'),

    mobile: Yup.string()
        .required('mobile field is required'),

    email: Yup.string()
        .email('Invalid email')
        .required('email field is required'),
});

export const securityValidationSchema = Yup.object({
    old_password: Yup.string()
      .required('old password Required'),
    new_password: Yup.string().required('New password is required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
  })