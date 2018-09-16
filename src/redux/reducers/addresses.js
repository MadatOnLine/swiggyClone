import ip from "icepick";
import Toast from "react-native-simple-toast";

const initialState = ip.freeze({
  selectedAddress: "",
  addresses: []
});

import {
  GET_ADDRESSES_SUCCESSFUL,
  GET_ADDRESSES_REQUEST,
  GET_ADDRESSES_FAILED,
  SELECT_ADDRESS_FOR_DELIVERY
} from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESSES_SUCCESSFUL:
      return ip.assocIn(state, ["addresses"], action.payload);

    case GET_ADDRESSES_FAILED:
      Toast.show("OOPS ! , Something went wrong");
      return state;

    case SELECT_ADDRESS_FOR_DELIVERY:
      return ip.assocIn(state, ["selectedAddress"], action.payload);
    default:
      return state;
  }
};
