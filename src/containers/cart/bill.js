import React, { Component } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../utils/constants";

const RowItem = ({ label, value }) => (
  <View
    style={{
      flexDirection: "row",
      marginVertical: 5
    }}
  >
    <Text
      style={{
        flex: 1,
        fontSize: 12
      }}
    >
      {label}
    </Text>

    <Text
      style={{
        marginHorizontal: 10,
        fontSize: 12
      }}
    >
      {value}
    </Text>
  </View>
);

export class Bill extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.REAL_WHITE,
          paddingVertical: 15,
          marginVertical: 15,
          paddingHorizontal: 10
        }}
      >
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
            marginBottom: 10
          }}
        >
          Your Bill
        </Text>

        <RowItem label="Item total" value="$200" />
        <RowItem label="Tax" value="$200" />
        <RowItem label="Delivery charge" value="$200" />
        <RowItem label="To pay" value="$200" />
      </View>
    );
  }
}

export default Bill;
