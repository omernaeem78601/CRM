import {combineReducers} from 'redux'
import {logoutReducer} from './authReducer'
const rootAuthRed = combineReducers({logoutReducer})



export {rootAuthRed}