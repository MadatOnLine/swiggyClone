import Toast from "react-native-simple-toast";

const initialState = [];

import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_FAILED,
  GET_ALL_CATEGORIES_SUCCESSFUL
} from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESSFUL:
      return action.payload;

    case GET_ALL_CATEGORIES_FAILED:
      Toast.show("OOPS ! , Something went wrong");
      return state;
    default:
      return state;
  }
};
