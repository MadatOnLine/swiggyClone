import { combineReducers } from "redux";
import user from "./user";
import promises from "./promises";
import dashboard from "./dashboard";
import { reducer } from "redux-form";

export default combineReducers({
  user,
  dashboard,
  promises,
  form: reducer
});
