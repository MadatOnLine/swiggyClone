import { combineReducers } from "redux";
import user from "./user";
import promises from "./promises";
import dashboard from "./dashboard";
import cart from "./cart";
import { reducer } from "redux-form";
import orders from "./orders";

export default combineReducers({
  user,
  dashboard,
  cart,
  promises,
  orders,
  form: reducer
});
