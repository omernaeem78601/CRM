import { LOGOUT_STATE } from "./constant";

export const logoutReducer = (state = [], action) => {
  if (action.type === LOGOUT_STATE) {
    return action.payload;
  } else {
    return state;
  }
};
