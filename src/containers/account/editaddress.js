import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../../components/navigationHeader";
import { Colors } from "../../utils/constants";
import { getMyAddresses } from "../../redux/actions";
import { connect } from "react-redux";
import idx from "idx";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const SavedAddressesHeader = () => (
  <View
    style={{
      paddingVertical: 5,
      paddingHorizontal: 10,
      flex: 1
    }}
  >
    <Text
      style={{
        fontSize: 10,
        color: Colors.TEXT_LABEL_GREY,
        paddingVertical: 5
      }}
    >
      SAVED ADDRESSES
    </Text>
  </View>
);

const Address = ({ address, type, landmark, locality, onEdit }) => (
  <View style={styles.addressCardWrapper}>
    <Icon
      name={type === "Home" ? "ios-home-outline" : "ios-pin-outline"}
      color={Colors.KINDA_BLACK}
      size={20}
      style={{
        marginHorizontal: 10
      }}
    />

    <View
      style={{
        flex: 1,
        paddingLeft: 10
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "400" }}>{type}</Text>
      <Text
        style={{
          color: Colors.TEXT_LABEL_GREY
        }}
      >
        {address}, {landmark}, {locality}
      </Text>

      <View style={styles.addressButtonsWrapper}>
        <TouchableOpacity onPress={onEdit}>
          <Text
            style={{
              color: Colors.BRAND_SAFFRON,
              fontWeight: "600"
            }}
          >
            EDIT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              color: Colors.BRAND_SAFFRON,
              fontWeight: "600"
            }}
          >
            DELETE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const AddNewAddressButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      borderColor: Colors.BRAND_GREEN,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 2,
      paddingHorizontal: 5
    }}
  >
    <Text
      style={{
        color: Colors.BRAND_GREEN,
        fontWeight: "500",
        fontSize: 10
      }}
    >
      ADD NEW ADDRESS
    </Text>
  </TouchableOpacity>
);

class EditAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myAddresses: []
    };
  }

  componentDidMount() {
    let { api_token } = this.props;
    this.props.getMyAddresses(api_token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.myAddresses !== this.props.myAddresses) {
      this.setState({
        myAddresses: nextProps.myAddresses
      });
    }
  }

  onEditAddress = data => {
    this.props.navigation.navigate("SetAddress", {
      data: data
    });
  };

  onAddNewAddress = () => {
    this.props.navigation.navigate("SetAddress");
  };

  render() {
    const { myAddresses } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.REAL_WHITE,
          paddingTop: 25
        }}
      >
        <Header
          label="MANAGE ADDRESSES"
          onLeft={() => this.props.navigation.pop()}
        />
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F4F4F4",
            paddingHorizontal: 10,
            paddingVertical: 5
          }}
        >
          <SavedAddressesHeader />
          <AddNewAddressButton onPress={this.onAddNewAddress} />
        </View>

        <FlatList
          data={myAddresses}
          renderItem={({ item }) => (
            <Address {...item} onEdit={() => this.onEditAddress(item)} />
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let myAddresses = idx(state, _ => _.addresses.addresses);
  let api_token = idx(state, _ => _.user.api_token) || "";

  return {
    myAddresses,
    api_token
  };
};

export default connect(
  mapStateToProps,
  { getMyAddresses }
)(EditAddress);
