import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../containers/home";
import CartIcon from "../components/cartIcon";

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `Near You`,
      headerBackTitle: null,
      tabBarIcon: props => <Icon name="ios-compass-outline" />
    })
  },
  Explore: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `Explore`,
      headerBackTitle: null,
      tabBarIcon: props => <Icon name="ios-search-outline" />
    })
  },
  Cart: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `Cart`,
      headerBackTitle: null,
      tabBarIcon: props => <CartIcon name="ios-cart-outline" />
    })
  },
  Account: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `Account`,
      headerBackTitle: null,
      tabBarIcon: props => <Icon name="ios-person-outline" />
    })
  }
});
