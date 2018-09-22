import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Colors, Metrics } from "../../utils/constants";
import { connect } from "react-redux";
import idx from "idx";
import { getPastOrders, trackOrder } from "../../redux/actions";
import styles from "./styles";
import upperFirst from "lodash/upperFirst";
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";

var moment = require("moment");

resolveOrderedItems = items =>
  items
    .map(function(obj) {
      return obj.product_name;
    })
    .join(", "); // returns the expected output.

const Order = ({
  id,
  status,
  total_amount,
  order_products,
  order_date,
  onOrderPress
}) => (
  <View style={styles.orderWrapper}>
    <View style={styles.orderItemNameWrapper}>
      <Text
        style={{
          fontWeight: "500",
          color: Colors.BRAND_SAFFRON,
          fontSize: 24
        }}
      >
        {`ORDER # ${id}`}
      </Text>

      <TouchableOpacity
        onPress={onOrderPress}
        style={{
          paddingVertical: 8
        }}
      >
        <Text
          style={{
            color: "rgb(93, 143, 213)",
            paddingVertical: 2,
            fontSize: 18,
            fontWeight: "500"
          }}
        >
          {`Status : ${upperFirst(status)}`}
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: Colors.TEXT_LABEL_GREY
        }}
      >
        {total_amount}
      </Text>
    </View>
    <View style={styles.orderedItemsWrapper}>
      <Text style={styles.orderedItems}>
        {/* {order_products && order_products[0] && order_products[0].product_name} */}
        {resolveOrderedItems(order_products)}
      </Text>
      <Text
        style={{
          color: Colors.KINDA_BLACK,
          fontSize: 14
        }}
      >
        {moment(order_date).format("MMM DD,HH:MM A")}
      </Text>
      <View style={styles.reOrderButton}>
        <Text style={styles.reOrder}>RE-ORDER</Text>
      </View>
    </View>
  </View>
);

class PastOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: props.orders
    };
  }

  componentWillMount() {
    const { api_token } = this.props;
    this.props.getPastOrders(api_token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.orders !== this.props.orders) {
      this.setState({
        orders: nextProps.orders
      });
    }
  }

  onOrderPress = async item => {
    // this.props.navigation.push("TrackOrder", { order: item });

    const { api_token } = this.props;
    const { runner_id } = item;

    let id = runner_id ? runner_id : 1;
    const res = await this.props.trackOrder(api_token, id);
    if (item.status === "delivered") {
      Toast.show("Your order has been delivered,enjoy your meal", Toast.SHORT);
      return;
    } else {
      this.props.navigation.push("TrackOrder", {
        latitude: res.runner.latitude,
        longitude: res.runner.longitude,
        order: item
      });
    }
  };

  render() {
    const { orders } = this.state;
    return (
      <View
        style={{
          marginVertical: 10,
          paddingTop: 15
        }}
      >
        <View style={styles.pastOrdersWrapper}>
          <Text
            style={{
              color: Colors.TEXT_LABEL_GREY
            }}
          >
            {`PAST ORDERS`}
          </Text>
          <FlatList
            data={orders}
            renderItem={({ item }) => (
              <Order {...item} onOrderPress={() => this.onOrderPress(item)} />
            )}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </View>
    );
  }
}

const HOC = withNavigation(PastOrders);

const mapStateToProps = state => {
  let api_token = idx(state, _ => _.user.api_token);
  let orders = idx(state, _ => _.orders);
  return {
    api_token,
    orders
  };
};

export default connect(
  mapStateToProps,
  { getPastOrders, trackOrder }
)(HOC);
