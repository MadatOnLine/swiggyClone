import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { CartItem } from "./cartItem";
import Bill from "./bill";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";

let discountImage = require("../../assets/images/discount.png");

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.SCREEN_WHITE
        }}
      >
        <CartItem />

        <View
          style={{
            backgroundColor: Colors.REAL_WHITE,
            marginVertical: 15,
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              marginRight: 20
            }}
            source={discountImage}
          />
          <Text
            style={{
              flex: 1,
              fontWeight: "500"
            }}
          >
            APPLY COUPON ?
          </Text>
          <Icon
            name="ios-arrow-forward-outline"
            size={20}
            color={Colors.TEXT_LABEL_GREY}
          />
        </View>

        <Bill />
        <Text>Address</Text>
        <Text>Pay button</Text>
      </View>
    );
  }
}

export default Cart;
