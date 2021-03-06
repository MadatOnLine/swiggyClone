import { combineReducers } from "redux";
import user from "./user";
import promises from "./promises";
import dashboard from "./dashboard";
import cart from "./cart";
import { reducer } from "redux-form";
import orders from "./orders";
import addresses from "./addresses";
import categoryItems from "./categoryItems";
import registration from "./registration";
import allCategories from "./allCategories";
import orderStatus from "./orderStatus";
import offers from "./offers";

export default combineReducers({
  user,
  registration,
  dashboard,
  cart,
  promises,
  orders,
  addresses,
  categoryItems,
  allCategories,
  orderStatus,
  offers,
  form: reducer
});
