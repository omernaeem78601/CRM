import * as Yup from 'yup'

export const initialValues =  Yup.object({
  code: '',
  description: '',
  pos_code: '',
  modifier1: '',
  modifier2: '',
  modifier3: '',
  modifier4: '',
  fee: '',
  company_id: 1,
})
export const ValidationSchema = Yup.object({
  code: Yup.string().required('CPT Code is required'),
  // pos_code: Yup.string().required('POS Code is required'),
  fee: Yup.string().required('Fee is required'),
})


