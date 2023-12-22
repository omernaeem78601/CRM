import { combineReducers } from "redux";
import { logoutReducer } from "./reducer";

const rootRed = combineReducers({ logoutReducer });

export default rootRed;
