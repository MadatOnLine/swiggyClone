import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../containers/home";
import CartIcon from "../components/cartIcon";
import Cart from "../containers/cart";
import Account from "../containers/account";
import Explore from "../containers/explore";

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `Near You`,
      headerBackTitle: null,
      tabBarIcon: props => <Icon name="ios-compass-outline" size={25} />
    })
  },
  Offers: {
    screen: Explore,
    navigationOptions: () => ({
      title: `Explore`,
      headerBackTitle: null,
      tabBarIcon: props => <Icon name="ios-search-outline" size={25} />
    })
  },
  Cart: {
    screen: Cart,
    navigationOptions: () => ({
      title: `Cart`,
      headerBackTitle: null,
      tabBarIcon: props => <CartIcon name="ios-cart-outline" size={25} />
    })
  },
  Account: {
    screen: Account,
    navigationOptions: () => ({
      title: `Account`,
      headerBackTitle: null,
      tabBarIcon: props => <Icon name="ios-person-outline" size={25} />
    })
  }
});
