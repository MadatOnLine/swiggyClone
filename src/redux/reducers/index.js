import { combineReducers } from "redux";
import user from "./user";
import promises from "./promises";
import { reducer } from "redux-form";

export default combineReducers({
  user,
  promises,
  form: reducer
});
