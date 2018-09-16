import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { Colors } from "../../utils/constants";

const brandLogo = require("../../assets/images/pembina1024.png");

export class Header extends Component {
  render() {
    const { onEditAddress, selectedAddress = {} } = this.props;
    return (
      <TouchableOpacity style={styles.wrapper} onPress={onEditAddress}>
        <View style={styles.addressWrapper}>
          <Text style={styles.addressLabel}>
            {selectedAddress.type || "Please select Address"}
          </Text>
          <View style={styles.downIcon}>
            <Icon
              name="ios-arrow-down"
              size={20}
              color={Colors.BRAND_SAFFRON}
              style={styles.iconStyle}
            />
          </View>
        </View>
        <View />
        <Text style={styles.addressSubText}>
          {selectedAddress.locality || ""}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Header;
