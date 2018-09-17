import Account from "./account";
import Editaddress from "./editaddress";
import SetAddress from "./setaddress";

import { createStackNavigator } from "react-navigation";

export default createStackNavigator(
  {
    Account: {
      screen: Account
    },
    EditAddress: {
      screen: Editaddress
    },
    SetAddress: {
      screen: SetAddress
    }
  },
  {
    headerMode: "none"
  }
);
