import * as Yup from 'yup'


export const ValidationSchema = Yup.object({
    option_value: Yup.string().required('Option Value Code is required'),
    option_id: Yup.string().required('Option ID Code is required'),
})
