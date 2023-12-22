import { ApiFetchReq } from "../../../../../utilities/api/ApiRequest";


// get data api request
export const getCptCodesReq = async () => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/cpt/code`);
};


// post data api request 
export const postCptCodeReq = async ( formValues) => {
    return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/cpt/code`, formValues);
};

// show single data api request 
export const showCptCodeReq = async (cptID) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/cpt/code/${cptID}`);
};
export const showCptCodeEditReq = async (cptID) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/cpt/code/${cptID}`);
};
  
// update data api request 
export const putCptCodeReq = async (cptID , handle) => {
    return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/cpt/code/${cptID}`, handle);
};

// delete data api request
export const deleteCptCodeReq = async (id) => {
    return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/cpt/code/${id}`);
};