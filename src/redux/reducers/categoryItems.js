import Toast from "react-native-simple-toast";

const initialState = [];

import {
  GET_CATEGORY_ITEMS_REQUEST,
  GET_CATEGORY_ITEMS_SUCCESSFUL,
  GET_CATEGORY_ITEMS_FAILED
} from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_ITEMS_SUCCESSFUL:
      return action.payload;

    case GET_CATEGORY_ITEMS_FAILED:
      Toast.show("OOPS ! , Something went wrong");
      return state;
    default:
      return state;
  }
};
