import { createStackNavigator } from "react-navigation";

import Home from "./home";
import AddressPicker from "../addressPicker";
import CategoryDetail from "../categoryDetails";
import Categories from "../allCategories";

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
    },
    Categories: {
      screen: Categories
    }
  },
  {
    headerMode: "none"
  }
);
