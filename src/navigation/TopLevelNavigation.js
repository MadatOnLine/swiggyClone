import React from "react";
import {
  View,
  Text
} from "react-native";
import { createStackNavigator } from "react-navigation";
import SplashScreen from "../containers/splashscreen";
import HomeNavigator from "./TabNavigation";

export default createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Home: {
      screen: HomeNavigator
    }
  },
  {
    headerMode: "none"
  }
);
