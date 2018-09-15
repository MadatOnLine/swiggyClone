import Toast from "react-native-simple-toast";
import ip from "icepick";
const initialState = ip.freeze([]);
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../constants";

export default (state = initialState, action) => {
  if (action.type === (ADD_ITEM_TO_CART || REMOVE_ITEM_FROM_CART)) {
    let index = state.findIndex(i => i.id === action.payload.id);
  }
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      if (index < 0) {
        return ip.push(state, ip.assocIn(action.payload, ["count"], 1));
      } else {
        return ip.updateIn(state, [index, "count"], val => val + 1);
      }

    case REMOVE_ITEM_FROM_CART:
      if (index < 0) {
        return state.filter(itm => itm.id !== action.payload.id);
      } else {
        let nA = ip.updateIn(state, [index, "count"], val => val - 1);
        if (nA[index].count === 0) {
          return nA.filter(itm => itm.id !== action.payload.id);
        }
        return nA;
      }
      return state;
    default:
      return state;
  }
};
