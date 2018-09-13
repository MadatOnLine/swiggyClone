import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { CartItem } from "./cartItem";
import Bill from "./bill";
import Addresses from "./addresses";
import PayNowButton from "./paybutton";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import idx from "idx";
import { connect } from "react-redux";
import { addToCart, removeItemFromCart } from "../../redux/actions";
import CartEmpty from "./cartEmpty";
import { getCartTotal, getTaxAmount } from "../../utils/helpers";

let discountImage = require("../../assets/images/discount.png");

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cartItems } = this.props;
    let cartTotal = getCartTotal(cartItems);
    let tax = getTaxAmount(cartTotal);
    let total = cartTotal + tax;
    if (cartItems && cartItems.length > 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.SCREEN_WHITE
          }}
        >
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.REAL_WHITE
            }}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            {cartItems && cartItems.length > 0
              ? cartItems.map((itm, ind) => (
                  <CartItem
                    key={ind}
                    {...itm}
                    object={itm}
                    onAddToCart={this.props.addToCart}
                    onRemoveFromCart={this.props.removeItemFromCart}
                  />
                ))
              : null}
            <View
              style={{
                backgroundColor: Colors.REAL_WHITE,
                marginVertical: 15,
                paddingVertical: 15,
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 20
                }}
                source={discountImage}
              />
              <Text
                style={{
                  flex: 1,
                  fontWeight: "500"
                }}
              >
                APPLY COUPON ?
              </Text>
              <Icon
                name="ios-arrow-forward-outline"
                size={20}
                color={Colors.TEXT_LABEL_GREY}
              />
            </View>

            <Bill itemTotal={cartTotal} tax={tax} total={total} />
            <Addresses />
          </ScrollView>
          <PayNowButton total={total} />
        </View>
      );
    } else {
      return <CartEmpty />;
    }
  }
}

const mapStateToProps = state => {
  let cartItems = idx(state, _ => _.cart) || [];
  return {
    cartItems
  };
};

export default connect(
  mapStateToProps,
  { addToCart, removeItemFromCart }
)(Cart);
