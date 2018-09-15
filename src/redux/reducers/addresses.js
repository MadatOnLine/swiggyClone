import Toast from "react-native-simple-toast";

const initialState = {};

import {
  GET_ADDRESSES_SUCCESSFUL,
  GET_ADDRESSES_REQUEST,
  GET_ADDRESSES_FAILED
} from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESSES_SUCCESSFUL:
      return action.payload;

    case GET_ADDRESSES_FAILED:
      Toast.show("OOPS ! , Something went wrong");
      return state;
    default:
      return state;
  }
};
