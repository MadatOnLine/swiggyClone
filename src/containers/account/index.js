import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import PastOrders from "./pastorders";
import { connect } from "react-redux";
import idx from "idx";

const DataRow = ({ text1, text2, text3 }) => (
  <View
    style={{
      flex: 1
    }}
  >
    <Text
      style={{
        fontWeight: "500"
      }}
    >
      {text1}
    </Text>
    <View
      style={{
        flexDirection: "row",
        paddingTop: 5,
        alignItems: "center"
      }}
    >
      <Text
        style={{
          color: Colors.TEXT_LABEL_GREY,
          fontSize: 12,
          marginRight: 10
        }}
      >
        {text2}
      </Text>
      <Text
        style={{
          color: Colors.TEXT_LABEL_GREY,
          fontSize: 12
        }}
      >
        {text3}
      </Text>
    </View>
  </View>
);

const EditData = () => (
  <View>
    <Text
      style={{
        color: Colors.BRAND_SAFFRON,
        fontWeight: "600",
        fontSize: 12
      }}
    >
      EDIT
    </Text>
  </View>
);
export class Account extends Component {
  render() {
    const { name, mobile_no, email } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.SCREEN_WHITE
        }}
      >
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.REAL_WHITE,
              paddingTop: 25
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                paddingVertical: 20,
                borderBottomColor: "black",
                borderBottomWidth: 2,
                backgroundColor: Colors.REAL_WHITE
              }}
            >
              <DataRow text1={name} text2={mobile_no} text3={email} />
              <EditData />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                paddingVertical: 20,
                borderBottomColor: Colors.TEXT_LABEL_GREY,
                borderBottomWidth: 1,
                alignItems: "center"
              }}
            >
              <DataRow
                text1="MY Account"
                text2="Addresses,Payments,Referrals and Offers"
              />
              <TouchableOpacity>
                <Icon
                  name="ios-arrow-down-outline"
                  color={Colors.TEXT_LABEL_GREY}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                paddingVertical: 20,
                alignItems: "center"
              }}
            >
              <DataRow text1="Help" text2="FAQs & Links" />
              <TouchableOpacity>
                <Icon
                  name="ios-arrow-forward-outline"
                  color={Colors.TEXT_LABEL_GREY}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <PastOrders />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let user = idx(state, _ => _.user.customer) || {};
  let { name, mobile_no, email } = user;
  return {
    name,
    mobile_no,
    email
  };
};

export default connect(
  mapStateToProps,
  null
)(Account);
