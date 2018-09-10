import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Colors } from "../../utils/constants";

const homeicon = require("../../assets/images/home.png");
export class Addresses extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.REAL_WHITE,
          paddingVertical: 15,
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "center"
        }}
      >
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "contain",
            marginRight: 10
          }}
          source={homeicon}
        />
        <View
          style={{
            flex: 1
          }}
        >
          <Text> Deliver to Home </Text>
          <Text
            style={{
              color: Colors.TEXT_LABEL_GREY,
              fontSize: 12,
              paddingVertical: 2
            }}
          >
            {`JP Nagar`}
          </Text>
        </View>

        <Text
          style={{
            fontWeight: "500",
            color: Colors.BRAND_SAFFRON
          }}
        >
          ADD ADDRESS
        </Text>
      </View>
    );
  }
}

export default Addresses;
