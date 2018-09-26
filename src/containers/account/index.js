import Account from "./account";
import Editaddress from "./editaddress";
import SetAddress from "./setaddress";
import TrackOrder from "./trackOrder";

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
    },
    TrackOrder: {
      screen: TrackOrder
    }
  },
  {
    headerMode: "none"
  }
);
