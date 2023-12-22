import { LOGOUT_STATE } from "./constant";

export const logoutReducer = (state = [], action) => {
    console.log('action.payload: ', action.payload);
    if (action.type === LOGOUT_STATE) {
      return action.payload
    } else {
      return state
    }
  }