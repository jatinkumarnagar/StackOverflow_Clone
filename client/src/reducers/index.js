import { combineReducers } from "redux";
import authReducers from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from "./users";

export default combineReducers({
    authReducers, currentUserReducer, questionsReducer, usersReducer
})