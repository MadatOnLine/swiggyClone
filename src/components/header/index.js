import React, {
  Component
} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet
} from "react-native";

const brandLogo = require("../../assets/images/pembina1024.png");

export class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={brandLogo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain"
  }
});
export default Header;
