import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import Header from "./header";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import { getMyAddresses } from "../../redux/actions";
import { connect } from "react-redux";
import idx from "idx";

const Suggestion = ({ icon, label, type, locality }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 3
    }}
  >
    <View
      style={{
        width: 40,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon name="ios-pin-outline" size={24} color={Colors.KINDA_BLACK} />
    </View>

    <View
      style={{
        marginLeft: 10,
        flex: 1,
        borderBottomColor: Colors.TEXT_LABEL_GREY,
        borderBottomWidth: 1,
        paddingBottom: 15
      }}
    >
      <Text
        style={{
          color: "rgba(1,1,1,0.7)",
          paddingVertical: 4,
          fontSize: 12
        }}
      >
        {locality}
      </Text>
      <Text
        style={{
          color: "rgba(1,1,1,0.7)",
          fontSize: 10
        }}
      >
        {type}
      </Text>
    </View>
  </View>
);

let suggestions = [
  {
    label: "Use Current Location",
    subLabel: "Using GPS",
    icon: "ios-locate-outline",
    id: "0"
  },
  {
    label: "Home",
    subLabel: "4747 Forest Ln",
    icon: "ios-pin-outline",
    id: "1"
  },
  {
    label: "Office",
    subLabel: "4501 Auburn Ave",
    icon: "ios-pin-outline",
    id: "2"
  }
];

export class AddressPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: props.addresses
    };
  }

  componentDidMount() {
    this.props.getMyAddresses(this.props.api_token);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps &&
      nextProps.addresses &&
      nextProps.addresses !== this.props.addresses
    ) {
      this.setState({
        addresses: nextProps.addresses
      });
    }
  }

  render() {
    const { addresses } = this.state;
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 25
        }}
      >
        <Header onChangeText={() => null} onLeft={this.props.navigation.pop} />
        <FlatList
          contentContainerStyle={{
            backgroundColor: Colors.REAL_WHITE,
            marginTop: 20,
            paddingHorizontal: 10,
            paddingVertical: 15
          }}
          renderItem={({ item }) => <Suggestion {...item} />}
          data={addresses}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let api_token = idx(state, _ => _.user.api_token);
  let addresses = idx(state, _ => _.addresses);
  return {
    api_token,
    addresses
  };
};

export default connect(
  mapStateToProps,
  { getMyAddresses }
)(AddressPicker);
