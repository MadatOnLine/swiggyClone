import { createStackNavigator } from "react-navigation";

import Home from "./home";
import AddressPicker from "../addressPicker";
import CategoryDetail from "../categoryDetails";

export default createStackNavigator(
  {
    Home: {
      screen: Home
    },
    EditAddress: {
      screen: AddressPicker
    },
    CategoryDetail: {
      screen: CategoryDetail
    }
  },
  {
    headerMode: "none"
  }
);
