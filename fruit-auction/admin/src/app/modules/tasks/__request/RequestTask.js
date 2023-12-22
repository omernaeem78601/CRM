import {ApiFetchReq} from '../../../utilities/api/ApiRequest'

export const getTaskReq = async (page, searchFilter) => { 
  let query_str = Object.entries(searchFilter).map(([key, val]) => `${key}=${val}`).join('&');
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/task?page=${page}&${query_str}`);
};

export const getUserListReq = async () => {
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/get/users/list`);
};


export const postTaskReq = async (formValues) => {
    return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/task`, formValues);
};

export const showTaskReq = async ( taskID) => { 
  return await ApiFetchReq("GET", `${process.env.REACT_APP_API_URL}/task/${taskID}`);
};

export const putTaskReq = async (taskID, formValues) => {
  return await ApiFetchReq("PUT", `${process.env.REACT_APP_API_URL}/task/${taskID}`, formValues);
};

export const postTaskCommentReq = async (taskID, formValues) => {
  return await ApiFetchReq("POST", `${process.env.REACT_APP_API_URL}/task/comment/store`, formValues);
};

export const deleteTaskReq = async (taskID) => {
  return await ApiFetchReq("DELETE", `${process.env.REACT_APP_API_URL}/task/${taskID}`);
};  