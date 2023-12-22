import React from 'react';
import * as Yup from 'yup';

export const profileInitialValues = () => Yup.object({

  npi: '',
  organization_name: '',
  title: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  suffix: '',
  full_name: '',
  address_line_1: '',
  address_line_2: '',
  city: '',
  state: '',
  zip_code: '',
  address: '',
  phone: '',
  fax: '',
  email: '',
  tax_id: '',
  tax_id_type: '',
  specialty: '',
  taxonomy: '',
  group_no: '',
  company_id: 1

})
