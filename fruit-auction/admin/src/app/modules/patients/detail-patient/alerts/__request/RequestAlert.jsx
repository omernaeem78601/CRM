import { ApiFetchReq } from "../../../../../utilities/api/ApiRequest";

export const getAlertReq = async (patientViewState) => {
  // let query_str = Object.entries(searchFilter).map(([key, val]) => `${key}=${val}`).join('&');
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/patient/${patientViewState}/alerts`);
};

export const postAlertReq = async (formValues) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/patient/alerts`, formValues);
};

export const showAlertReq = async (alertID) => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/patient/alert/${alertID}`);
};

export const putAlertReq = async (alertID, formValues) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/patient/alert/${alertID}`, formValues);
};

export const deleteAlertReq = async (alertID) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/patient/alert/${alertID}`);
};  