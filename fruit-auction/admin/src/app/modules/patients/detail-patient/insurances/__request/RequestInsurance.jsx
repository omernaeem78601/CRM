import { ApiFetchReq } from '../../../../../utilities/api/ApiRequest';
const listData = [
  'states',
  'title',
  'suffix',
  'languages',
  'gender',
  'identity',
  'orientation',
  'marital',
  'race',
  'ethnicities',
  'relationship',  
  'faility_name'
] 

// insurance  request
export const postInsuranceDataReq = async ( handle) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/insurance`, handle);
};
 
export const getInsuranceDataReq = async (page) => { 
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/insurance`);
};

export const deleteInsuranceDataReq = async (id) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/insurance/${id}`);
};

export const showInsuranceDataReq = async (id) => { 
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/insurance/${id}`);
};

export const putInsuranceDataReq = async ( id, handle) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/insurance/${id}`, handle);
};

//dumy
export const updateInsuranceDataReq = async ( id, handle) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/insurance/update/${id}`, handle);
};


