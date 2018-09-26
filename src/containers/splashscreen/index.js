import React, { Component } from "react";
import { View, Image } from "react-native";

import { connect } from "react-redux";

import styles from "./styles";
import idx from "idx";
const SPLASH_IMAGE = require("../../assets/images/pembina1024.png");

export class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      if (this.props.api_token) {
        this.props.navigation.replace("Home");
      } else {
        this.props.navigation.replace("Login");
      }
    }, 1000);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={SPLASH_IMAGE} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let api_token = idx(state, _ => _.user.api_token) || "";
  return {
    api_token
  };
};

export default connect(
  mapStateToProps,
  null
)(SplashScreen);
