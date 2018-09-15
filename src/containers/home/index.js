import { createStackNavigator } from "react-navigation";

import Home from "./home";
import AddressPicker from "../addressPicker";

export default createStackNavigator(
  {
    Home: {
      screen: Home
    },
    EditAddress: {
      screen: AddressPicker
    }
  },
  {
    headerMode: "none"
  }
);
