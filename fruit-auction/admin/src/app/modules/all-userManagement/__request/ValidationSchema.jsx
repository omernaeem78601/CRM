import * as Yup from 'yup'


export const ValidationSchema = Yup.object({

  name: Yup.string().required('Name is required'),

  email: Yup.string().required('Email is required'),
  
  phone: Yup.string().required('Mobile Number is required'),

  password: Yup.string().required('Password is required'),

  dob: Yup.string().required('DOB is required'),

  gender: Yup.string().required('Gender is required'),

  street: Yup.string().required('Address is required'),

  country: Yup.string().required('Country is required'),

  city: Yup.string().required('City is required'),

  state: Yup.string().required('State is required'),

  role: Yup.string().required('Role is required'),

  postalCode: Yup.string().required('Postal Code is required'),

})








