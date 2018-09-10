import React, { Component } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../utils/constants";

export class PayButton extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 10
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.REAL_WHITE,
            paddingVertical: 5,
            paddingHorizontal: 10
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400"
            }}
          >
            {"$192.00"}
          </Text>
          <Text
            style={{
              color: Colors.BRAND_BLUE,
              fontSize: 9,
              marginTop: 5
            }}
          >
            {`VIEW DETAILED BILL`}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Colors.BRAND_GREEN,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5
          }}
        >
          <Text
            style={{
              color: Colors.REAL_WHITE,
              fontWeight: "500"
            }}
          >
            {`PROCEED TO PAY`}
          </Text>
        </View>
      </View>
    );
  }
}

export default PayButton;
