import { LOGOUT_STATE } from "./constant";

export const logoutAction = (logoutState) => {
  return {
    type: LOGOUT_STATE,
    payload: logoutState,
  };
};
