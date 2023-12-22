
import * as Yup from 'yup';


export const ValidationSchema = Yup.object({
  description: Yup.string()
    .required('Description field is required'),

    type: Yup.string()
    .required('Type field is required'),
});

