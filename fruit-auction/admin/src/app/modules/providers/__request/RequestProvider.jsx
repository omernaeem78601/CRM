import { ApiFetchReq } from '../../../utilities/api/ApiRequest'

const listData = [
  'states',
  'title',
  'suffix'
]

export const getOptionsListReq = async () => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/options/${listData}/list`);
};

export const getProviderReq = async (providerType, page, searchFilter) => {
  let query_str = Object.entries(searchFilter).map(([key, val]) => `${key}=${val}`).join('&');
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/provider/${providerType}?page=${page}&${query_str}`);
};
 
export const postProviderReq = async (providerType, formValues) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/provider/${providerType}`, formValues);
};

export const showProviderReq = async (providerID, providerType) => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/provider/${providerType}/${providerID}`);
};

export const putProviderReq = async (formValues, providerID, providerType) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/provider/${providerType}/${providerID}`, formValues);
};

export const deleteProviderReq = async (providerType, providerID) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/provider/${providerType}/${providerID}`);
};  
