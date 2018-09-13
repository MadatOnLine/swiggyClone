import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import idx from "idx";
import { getCartItemCount } from "../../utils/helpers";

export class CartIcon extends Component {
  render() {
    const { name, cartItemCount } = this.props;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {cartItemCount && cartItemCount > 0 ? (
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 15 / 2,
              backgroundColor: "red",
              left: 9,
              top: 4,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 9,
                color: "white",
                fontWeight: "500"
              }}
            >
              {cartItemCount}
            </Text>
          </View>
        ) : null}
        <Icon name={name} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let cartItemCount = state && state.cart ? state.cart.length : 0;
  return {
    cartItemCount: cartItemCount
  };
};

export default connect(
  mapStateToProps,
  null
)(CartIcon);
