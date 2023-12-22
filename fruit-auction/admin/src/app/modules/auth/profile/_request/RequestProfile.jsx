import { ApiFetchReq } from '../../../../utilities/api/ApiRequest'

const listData = [
  'states',
  'title',
  'suffix',
  'gender'
]

export const getOptionsListReq = async () => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/options/${listData}/list`);
};

export const updateProfileReq = async (userid, formData) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/profile/${userid}`, formData);
};
export const showProfileReq = async (userid) => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/profile/${userid}`);
};

export const updatePasswordReq = async (userid, formData) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/update/user/password/${userid}`, formData);
};

export const updateProfileImageReq = async (userid, formData) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/update/user/profile/image/${userid}`, formData);
};