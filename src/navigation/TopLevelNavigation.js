import React, { Component } from "react";
import { View, Text, Modal, ActivityIndicator } from "react-native";
import { createStackNavigator } from "react-navigation";
import SplashScreen from "../containers/splashscreen";
import LoginScreen from "../containers/login";
import HomeNavigator from "./TabNavigation";
import { connect } from "react-redux";
import idx from "idx";
import { Colors } from "../utils/constants";

import { SkypeIndicator } from "react-native-indicators";

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <HomeNavigation />
        <Modal transparent visible={this.props.promises > 0 ? true : false}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(1,1,1,0.2)",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <SkypeIndicator color={Colors.BRAND_GREEN} size={40} />
          </View>
        </Modal>
      </View>
    );
  }
}

const HomeNavigation = createStackNavigator(
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

const mapStateToProps = state => {
  let promises = idx(state, _ => _.promises.IN_PROGRESS);
  return {
    promises
  };
};

export default connect(
  mapStateToProps,
  null
)(Main);
