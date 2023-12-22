import { ApiFetchReq } from "../../../../../utilities/api/ApiRequest";


// get data api request
export const getIcdCodesReq = async () => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/icd/code`);
};


// post data api request 
export const postIcdCodeReq = async ( formValues) => {
    return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/icd/code`, formValues);
};

// show single data api request 
export const showIcdCodeReq = async (icdID) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/icd/code/${icdID}`);
};
export const showIcdCodeEditReq = async (icdID) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/icd/code/${icdID}`);
};
  
// update data api request 
export const putIcdCodeReq = async (icdID , handle) => {
    return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/icd/code/${icdID}`, handle);
};

// delete data api request
export const deleteIcdCodeReq = async (id) => {
    return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/icd/code/${id}`);
};