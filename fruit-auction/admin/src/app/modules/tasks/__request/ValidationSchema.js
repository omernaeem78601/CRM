import * as Yup from 'yup';

export const ValidationSchema = Yup.object({

  title: Yup.string() 
  .required('Title field is required'),

  priority: Yup.string()
  .required('priority field is required'),

  user_id: Yup.string()
  .required('Owner field is required'),

  assignee_id: Yup.string()
  .required('Assignee field is required'),

  status: Yup.string()
  .required('status field is required'),

});

