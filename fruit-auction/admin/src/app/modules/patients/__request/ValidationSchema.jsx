import * as Yup from 'yup'


export const ValidationSchema = Yup.object({

  first_name: Yup.string().required('First name is required'),

  last_name: Yup.string().required('Last name is required'),

  dob: Yup.string().required('DOB is required'),

  gender: Yup.string().required('Gender is required'),

  street: Yup.string().required('Address is required'),

  city: Yup.string().required('City is required'),

  state: Yup.string().required('State is required'),

  zip_code: Yup.string().required('Zip Code is required'),

})








