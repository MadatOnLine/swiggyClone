import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Colors, Metrics } from "../../utils/constants";

const InputWithLabel = ({
  prefix = "+91",
  keyboardType = "default",
  maxLength = 10,
  label = "text label",
  secureEntry = false,
  value,
  onChangeText
}) => (
  <View
    style={{
      marginHorizontal: 10,
      marginTop: 20
    }}
  >
    <Text
      style={{
        fontSize: 10,
        color: Colors.TEXT_LABEL_GREY
      }}
    >
      {label}
    </Text>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderColor: Colors.BRAND_SAFFRON,
        borderWidth: 0,
        borderBottomWidth: 1
      }}
    >
      <Text>{prefix}</Text>
      <TextInput
        maxLength={maxLength}
        secureTextEntry={secureEntry}
        keyboardType={keyboardType}
        style={{
          paddingVertical: 10,
          width: Metrics.FULL_WIDTH,
          marginLeft: 10
        }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  </View>
);

export default InputWithLabel;
