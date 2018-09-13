import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Colors, Metrics } from "../../utils/constants";
import { connect } from "react-redux";
import idx from "idx";
import { getPastOrders } from "../../redux/actions";
import styles from "./styles";
import upperFirst from "lodash/upperFirst";

var moment = require("moment");

resolveOrderedItems = items =>
  items
    .map(function(obj) {
      return obj.product_name;
    })
    .join(", "); // returns the expected output.

const Order = ({
  order_id,
  status,
  total_amount,
  order_products,
  order_date
}) => (
  <View style={styles.orderWrapper}>
    <View style={styles.orderItemNameWrapper}>
      <Text
        style={{
          fontWeight: "500"
        }}
      >
        {order_id}
      </Text>

      <Text
        style={{
          color: Colors.TEXT_LABEL_GREY,
          paddingVertical: 2
        }}
      >
        {upperFirst(status)}
      </Text>

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
          color: Colors.TEXT_LABEL_GREY,
          fontSize: 8
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
            renderItem={({ item }) => <Order {...item} />}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </View>
    );
  }
}

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
  { getPastOrders }
)(PastOrders);
