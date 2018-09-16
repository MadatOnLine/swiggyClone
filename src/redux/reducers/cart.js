import Toast from "react-native-simple-toast";
import ip from "icepick";
const initialState = ip.freeze([]);
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../constants";

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      var index = state.findIndex(i => i.id === action.payload.id);
      if (index < 0) {
        Toast.show(`Added ${action.payload.title} to the cart`, Toast.SHORT);
        return ip.push(state, ip.assocIn(action.payload, ["count"], 1));
      } else {
        Toast.show(
          `Added one more ${action.payload.title} to the cart`,
          Toast.SHORT
        );
        return ip.updateIn(state, [index, "count"], val => val + 1);
      }

    case REMOVE_ITEM_FROM_CART:
      var index = state.findIndex(i => i.id === action.payload.id);
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
