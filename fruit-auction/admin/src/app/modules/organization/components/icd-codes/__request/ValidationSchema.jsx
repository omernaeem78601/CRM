import * as Yup from 'yup';
export const ValidationSchema = Yup.object({


  type: Yup.string()
  .required('Type  field is required'),

  name: Yup.string()
    .required('Name  field is required'),

  description: Yup.string()
    .required('Description field is required'),

});

