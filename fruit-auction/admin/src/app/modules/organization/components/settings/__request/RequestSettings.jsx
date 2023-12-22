import { ApiFetchReq } from "../../../../../utilities/api/ApiRequest";
 
// get req
export const getSettingDataReq = async (optionValue,page) => { 
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/options/${optionValue}?page=${page}`);
};
// get req
export const getNpiInfoData = async (npiInfoNumber) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/npi/info/${npiInfoNumber}`);
}; 
// get category 
export const getSettingCategory = async () => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/options/categories`);
};
 // delete req
export const deleteSettingDataReq = async (optionValue,id) => {
    return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/options/${optionValue}/${id}`);
};
  // get single data 
export const getSingleSettingDataReq = async (optionValue,settingID) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/options/${optionValue}/${settingID}`);
};
  // get single data 
export const getSingleSettingDataViewReq = async (optionValue,settingID) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/options/${optionValue}/${settingID}`);
};
// update req
export const updateSettingDataReq = async (optionValue,settingState , handle) => {
    return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/options/${optionValue}/${settingState}`, handle);
};
// post req
export const postSettingDataReq = async ( handle,optionValue) => {
    return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/options/${optionValue}`, handle);
};