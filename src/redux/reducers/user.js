import Toast from "react-native-simple-toast";
import { LOGIN_SUCCESSFUL, LOGIN_FAILED } from "../constants";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return action.payload;

    case LOGIN_FAILED:
      Toast.show("Invalid username or password,please try again");
      return state;
    default:
      return state;
  }
};
