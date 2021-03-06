import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Colors, Metrics } from "../../utils/constants";

const InputWithLabel = ({
  prefix = "+91",
  keyboardType = "default",
  maxLength = 30,
  label = "text label",
  secureEntry = false,
  value,
  onChangeText,
  autoFocus,
  autoCapitalize
}) => (
  <View
    style={{
      marginHorizontal: 10,
      marginTop: 20
    }}
  >
    <Text
      style={{
        fontSize: 14,
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
      <TextInput
        maxLength={maxLength}
        secureTextEntry={secureEntry}
        keyboardType={keyboardType}
        style={{
          paddingVertical: 10,
          width: Metrics.FULL_WIDTH
        }}
        onChangeText={text => onChangeText(text)}
        value={value}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        
      />
    </View>
  </View>
);

export default InputWithLabel;
