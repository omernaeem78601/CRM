import { ApiFetchReq } from '../../../../utilities/api/ApiRequest';

export const getUserReq = async (page, searchFilter) => { 
  let query_str = Object.entries(searchFilter).map(([key, val]) => `${key}=${val}`).join('&');
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/profile?page=${page}&${query_str}`);
};

export const postUserReq = async (formValues) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/profile`, formValues);
};

export const deleteUserReq = async (userID) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/profile/${userID}`);
};  