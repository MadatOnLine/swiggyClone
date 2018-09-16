import React from "react";
import { View, Text, Image } from "react-native";
import { Colors, Metrics } from "../../utils/constants";

const foodImage = require("../../assets/images/cooking.png");

const cartEmpty = ({ message }) => (
  <View
    style={{
      paddingVertical: 20,
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: Colors.REAL_WHITE,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Image
      style={{
        width: Metrics.FULL_WIDTH * 0.6,
        height: 100,
        resizeMode: "contain",
        marginBottom: 20
      }}
      source={foodImage}
    />
    <Text
      style={{
        fontWeight: "500",
        fontSize: 12,
        marginVertical: 10
      }}
    >
      GOOD FOOD IS ALWAYS COOKING
    </Text>
    <Text
      style={{
        fontWeight: "300",
        fontSize: 9,
        marginVertical: 10,
        color: Colors.TEXT_LABEL_GREY
      }}
    >
      {message}
    </Text>
  </View>
);

export default cartEmpty;
