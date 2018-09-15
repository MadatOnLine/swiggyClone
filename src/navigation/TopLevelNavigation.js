import React from "react";
import {
  View,
  Text
} from "react-native";
import { createStackNavigator } from "react-navigation";
import SplashScreen from "../containers/splashscreen";
import LoginScreen from "../containers/login";
import HomeNavigator from "./TabNavigation";


export default createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeNavigator
    }
  },
  {
    headerMode: "none"
  }
);
