import Toast from "react-native-simple-toast";
import ip from "icepick";

const initialState = ip.freeze([]);

import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return ip.push(state, action.payload);

    case REMOVE_ITEM_FROM_CART:
      //   nS = state;
      //   nS = nS.filter(itm => itm.id !== action.payload.id);
      return state;
    default:
      return state;
  }
};
