import React, { Component } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../utils/constants";
import { formatNumber } from "../../utils/helpers";

const RowItem = ({ label, value }) => (
  <View
    style={{
      flexDirection: "row",
      marginVertical: 5
    }}
  >
    <Text
      style={{
        flex: 4,
        fontSize: 12
      }}
    >
      {label}
    </Text>

    <View
      style={{
        width: 80,
        paddingLeft: 20
      }}
    >
      <Text
        style={{
          fontSize: 12
        }}
      >
        {value}
      </Text>
    </View>
  </View>
);

export class Bill extends Component {
  render() {
    const { itemTotal, tax, total } = this.props;
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

        <RowItem label="Item total" value={`$${formatNumber(itemTotal)}`} />
        <RowItem label="Tax" value={`$${formatNumber(tax)}`} />
        <RowItem label="Delivery charge" value="$0.00" />
        <RowItem label="To pay" value={`$${formatNumber(total)}`} />
      </View>
    );
  }
}

export default Bill;
