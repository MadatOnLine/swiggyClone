import { combineReducers } from "redux";
import user from "./user";
import { reducer } from "redux-form";

export default combineReducers({
  user,
  form: reducer
});
