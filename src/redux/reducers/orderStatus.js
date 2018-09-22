import Toast from "react-native-simple-toast";
import { TRACK_ORDER_SUCCESSFUL, TRACK_ORDER_FAILED } from "../constants";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case TRACK_ORDER_SUCCESSFUL:
      return action.payload;

    case TRACK_ORDER_FAILED:
      Toast.show("Please check if you have given all fields correct");
      return state;
    default:
      return state;
  }
};
