import Toast from "react-native-simple-toast";

const initialState = [];

import {
  GET_PAST_ORDERS_REQUEST,
  GET_PAST_ORDERS_FAILED,
  GET_PAST_ORDERS_SUCCESSFUL
} from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAST_ORDERS_SUCCESSFUL:
      return action.payload;

    case GET_PAST_ORDERS_FAILED:
      Toast.show("OOPS ! , Something went wrong");
      return state;
    default:
      return state;
  }
};
