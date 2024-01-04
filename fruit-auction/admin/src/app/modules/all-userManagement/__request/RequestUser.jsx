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
// user Request
export const getUserDataReq = async (page) => { 
  return await ApiFetchReq("GET", `${process.env.REACT_APP_BASE_URL}/fruit/user/users?page=${page}`);
};

// http://localhost:5000/fruit/user/delete/65829da82d0a1952bbd0d046
export const deleteUserDataReq = async (id) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_BASE_URL}/fruit/user/delete/${id}`);
};
// http://localhost:5000/fruit/user/block
export const blockUserReq = async (data) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_BASE_URL}/fruit/user/block`, data);
};
// http://localhost:5000/fruit/user/role
export const editUserRoleReq = async (data) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_BASE_URL}/fruit/user/role`, data);
};
// http://localhost:5000/fruit/user
export const postUserDataReq = async ( handle) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_BASE_URL}/fruit/user`, handle);
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






