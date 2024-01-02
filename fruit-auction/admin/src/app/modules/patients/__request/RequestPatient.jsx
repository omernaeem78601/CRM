import {ApiFetchReq} from '../../../utilities/api/ApiRequest'
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
// http://localhost:5000/fruit/user/users?page=2
// Patient Request
export const getPatientDataReq = async (page) => { 
  // let query_str = Object.entries(searchFilter).map(([key, val]) => `${key}=${val}`).join('&');
  return await ApiFetchReq("GET", `${process.env.REACT_APP_BASE_URL}/fruit/user/users?page=${page}`);
};

export const showPatientDataReq = async (id) => { 
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/patient/${id}`);
};

export const putPatientDataReq = async ( id, handle) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/patient/${id}`, handle);
};
 
//dumy
export const updatePatientDataReq = async ( id, handle) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/patient/update/${id}`, handle);
};

export const getOptionData = async () => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/options/${listData}/list`);
};
export const getPatientLocation = async () => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/facility/list`);
};

export const postPatientDataReq = async ( handle) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/patient`, handle);
};


export const deletePatientDataReq = async (id) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/patient/${id}`);
};


