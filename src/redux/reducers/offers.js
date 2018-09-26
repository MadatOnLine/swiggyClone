import Toast from "react-native-simple-toast";

const initialState = [];

import {
  GET_OFFERS_REQUEST,
  GET_OFFERS_FAILED,
  GET_OFFERS_SUCCESSFUL
} from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFERS_SUCCESSFUL:
      return action.payload;

    case GET_OFFERS_FAILED:
      Toast.show("OOPS ! , Something went wrong");
      return state;
    default:
      return state;
  }
};
