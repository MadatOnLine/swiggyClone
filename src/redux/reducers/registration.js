import Toast from "react-native-simple-toast";
import { REGISTER_SUCCESSFUL, REGISTER_FAILED } from "../constants";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
      return action.payload;

    case REGISTER_FAILED:
      Toast.show("Please check if you have given all fields correct");
      return state;
    default:
      return state;
  }
};
