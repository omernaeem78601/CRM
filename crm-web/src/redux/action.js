import { LOGOUT_STATE } from "./constant";

export const logoutAction = (singlePatient) => {
  return {
    type: LOGOUT_STATE,
    payload: singlePatient,
  };
};
