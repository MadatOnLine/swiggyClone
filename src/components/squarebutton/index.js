import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Metrics, Colors } from "../../utils/constants";

const Button = ({
  onClick = () => null,
  position = "center",
  width = Metrics.FULL_WIDTH * 0.6,
  color = Colors.BRAND_RED,
  label = "Button Label",
  inactive = false,
  style,
  onPress
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        width: width,
        backgroundColor: color,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        alignSelf: position,
        // opacity: inactive ? 0.5 : 1,
        marginHorizontal: 20
      },
      style
    ]}
  >
    <Text
      style={{
        color: "white",
        fontWeight: "400",
        fontSize: 18
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default Button;
