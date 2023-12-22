import { ApiFetchReq } from "../../../../../utilities/api/ApiRequest";


export const getRenderingProviderReq = async (providerType, page) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/provider/rendering/list`);
};

export const getReferingProviderReq = async (providerType, page) => {
    return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/provider/refering/list`);
};


export const getICDCodeListReq = async () => {  
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/icd/code/list`);
};

export const getCptCodeListReq = async () => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/cpt/code/list`);
};


export const createChartNoteDataReq = async (dataHandler, patient_id) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/chartnote/${patient_id}`, dataHandler);
};

// get req 
export const getChartNotesDataReq = async (patient_id, pageNumber) => { 
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/chartnote/${patient_id}?page=${pageNumber}`);
};
 
// delete req
export const deleteChartNoteDataReq = async (patientViewState, id) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/chartnote/${patientViewState}/${id}`);
};

// update req
export const updateChartNoteReq = async ( patientViewState, chartNoteEditState, dataHandler) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/chartnote/${patientViewState}/${chartNoteEditState}`, dataHandler);
};

export const showChartNoteDataReq = async (patientViewState, chartNoteEditState) => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/chartnote/${patientViewState}/${chartNoteEditState}`);
};
  

