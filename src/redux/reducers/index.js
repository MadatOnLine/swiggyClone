import { combineReducers } from "redux";
import user from "./user";
import promises from "./promises";
import dashboard from "./dashboard";
import cart from "./cart";
import { reducer } from "redux-form";
import orders from "./orders";
import addresses from "./addresses";

export default combineReducers({
  user,
  dashboard,
  cart,
  promises,
  orders,
  addresses,
  form: reducer
});
