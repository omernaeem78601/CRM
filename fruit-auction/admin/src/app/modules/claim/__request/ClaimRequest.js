import { ApiFetchReq } from "../../../utilities/api/ApiRequest"


export const getICDCodeListReq = async () => { 
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/icd/code/list`);
};

export const getCptCodeListReq = async () => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/cpt/code/list`);
};


export const organizationDataReq = async (id) => {
  return await ApiFetchReq('GET', `${process.env.REACT_APP_API_URL}/get/company/detail`)
}

export const getRenderingProviderReq = async (providerType, page) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/provider/rendering/list`);
};

export const getReferingProviderReq = async (providerType, page) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/provider/refering/list`);
};
