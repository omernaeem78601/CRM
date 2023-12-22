import { ApiFetchReq } from "../../../../../utilities/api/ApiRequest";

const listData = [
    'states',
    'title',
    'suffix'
  ]

export const getOptionsListReq = async () => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/options/${listData}/list`);
};

// get data api request
export const getFacilityDataReq = async () => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/facility`);
};
 // delete data api request
export const deleteFacilityDataReq = async (facilityId) => {
    return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/facility/${facilityId}`);
};
  // show single data api request  
export const getSingleFacilityDataReq = async (facilityState) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/facility/${facilityState}`);
};
// update data api request
export const updateFacilityDataReq = async (facilityState , empty) => {
    return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/facility/${facilityState}`, empty);
};
// post data api request 
export const postFacilityDataReq = async ( formValues) => {
    return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/facility`, formValues);
};