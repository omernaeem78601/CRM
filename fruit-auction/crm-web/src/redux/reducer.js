import { LOGOUT_STATE } from "./constant";

// export const userReducerComp = (state = [], action) => {
//   switch (action.type) {
//     case ADD_USER:
//       // console.log("Adding user to state reducer:", action.payload);
//       state = action.payload;
//       // console.log("Adding user to state reducer state:", state);
//       return state;
//     default:
//       return state;
//   }
// };
export const logoutReducer = (state = [], action) => {
    if (action.type === LOGOUT_STATE) {
      return action.payload
    } else {
      return state
    }
  }