import * as Yup from 'yup'

export const insuranceValidationSchema = Yup.object({

  payer_id: Yup.string().required('Payer ID is required'),

  payer_name: Yup.string().required('Payer Name is required'),

  payer_class: Yup.string().required('Payer Class is required'),

  subscriber_id: Yup.string().required('Subscriber ID is required'),

  level: Yup.string().required('Level is required'),

  status: Yup.string().required('status is required'),

  subscriber_type: Yup.string(),

  insured_first_name: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('Middle Name is required');
    }
    return schema
  }),

  insured_last_name: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('Middle Name is required');
    }
    return schema
  }),

  insured_dob: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('Middle Name is required');
    }
    return schema
  }),

  insured_gender: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('Middle Name is required');
    }
    return schema
  }),

  insured_street1: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('Address is required');
    }
    return schema
  }),

  insured_city: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('City is required');
    }
    return schema
  }),

  insured_state: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('State is required');
    }
    return schema
  }),

  insured_zipcode: Yup.string().when("subscriber_type", (subscriber_type, schema) => {
    if (subscriber_type != 'self') {
      return schema.required('Zip code is required');
    }
    return schema
  }),

})







