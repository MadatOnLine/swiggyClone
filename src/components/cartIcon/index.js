import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import idx from "idx";
import { getCartItemCount } from "../../utils/helpers";

import styles from "./styles";

export class CartIcon extends Component {
  render() {
    const { name, cartItemCount } = this.props;
    return (
      <View style={styles.cartIconWrapper}>
        {cartItemCount && cartItemCount > 0 ? (
          <View style={styles.countWrapper}>
            <Text style={styles.count}>{cartItemCount}</Text>
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
