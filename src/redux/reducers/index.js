import { combineReducers } from "redux";
import user from "./user";
import promises from "./promises";
import dashboard from "./dashboard";
import cart from "./cart";
import { reducer } from "redux-form";

export default combineReducers({
  user,
  dashboard,
  cart,
  promises,
  form: reducer
});
