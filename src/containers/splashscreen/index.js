import React, {
  Component
} from "react";
import {
  Text,
  View,
  Image
} from "react-native";

import { withNavigation } from "react-navigation";

import styles from "./styles";
const splashimage = require("../../assets/images/pembina1024.png");

export class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(
        "Home"
      );
    }, 1000);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={splashimage}
        />
      </View>
    );
  }
}

export default withNavigation(
  SplashScreen
);
