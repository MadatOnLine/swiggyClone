import Toast from "react-native-simple-toast";

const initialState = {};

import {
  GET_DASH_BOARD_SUCCESSFUL,
  GET_DASH_BOARD_FAILED,
  GET_DASH_BOARD_REQUEST
} from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DASH_BOARD_SUCCESSFUL:
      return action.payload;

    case GET_DASH_BOARD_FAILED:
      Toast.show("OOPS ! , Something went wrong");
      return state;
    default:
      return state;
  }
};
