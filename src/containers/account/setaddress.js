import React, { Component } from "react";
import { Text, View, TouchableOpacity, Geolocation } from "react-native";
import Header from "../../components/navigationHeader";
import { Colors } from "../../utils/constants";
import Input from "../../components/inputwithlabel";
import { Field, reduxForm } from "redux-form";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import idx from "idx";
import ScrollView from "react-native-input-scroll-view";
import { saveAddress, updateAddress } from "../../redux/actions";
import { validateAddress } from "../../utils/helpers";

const FormTextInput = props => (
  <Input
    {...props}
    nextField={props.nextField}
    multiline={props.multiline}
    maxLength={props.maxLength}
    autoFocus={props.autoFocus}
    value={props.input.value}
    onChangeText={text => {
      props.input.onChange(text);
      if (props.onCustomTextChange) {
        props.onCustomTextChange(text);
      }
    }}
    keyboardType={props.keyboardType}
    clearButtonMode={props.clearButtonMode}
    onFocus={ref => {
      if (props.onFocusCb) props.onFocusCb(ref);
    }}
    autoCorrect={false}
    onEndEditing={() => {
      if (props.onEndEditing) {
        props.onEndEditing();
      }
      if (props.input.onEndEditing) {
        props.input.onEndEditing();
      }
    }}
    style={{
      height: 80,
      width: "100%",
      paddingHorizontal: 10
    }}
  />
);

const AddressItem = ({ label, icon, selected, onSelectAddressType }) => (
  <TouchableOpacity
    onPress={onSelectAddressType}
    style={{
      borderBottomColor: Colors.BRAND_SAFFRON,
      borderBottomWidth:
        String(selected).toLowerCase() === String(label).toLowerCase() ? 2 : 0,
      maxWidth: "70%",
      paddingBottom: 5,
      flexDirection: "row",
      alignItems: "center"
    }}
  >
    <Icon
      name={icon}
      style={{
        paddingHorizontal: 5
      }}
    />
    <Text>{label}</Text>
  </TouchableOpacity>
);

const AddressTypeSelector = ({ onSelectAddressType, selectedAddressType }) => (
  <View
    style={{
      marginVertical: 15,
      marginLeft: 10
    }}
  >
    <Text
      style={{
        marginTop: 10
      }}
    >
      Save As
    </Text>
    <View
      style={{
        flexDirection: "row",
        marginVertical: 20
      }}
    >
      <View
        style={{
          flex: 1,
          marginVertical: 10
        }}
      >
        <AddressItem
          label="Home"
          icon="ios-home-outline"
          selected={selectedAddressType}
          onSelectAddressType={() => onSelectAddressType("Home")}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginVertical: 10
        }}
      >
        <AddressItem
          label="Office"
          icon="ios-pin-outline"
          onSelectAddressType={() => onSelectAddressType("Office")}
          selected={selectedAddressType}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginVertical: 10
        }}
      >
        <AddressItem
          label="Other"
          icon="ios-pin-outline"
          onSelectAddressType={() => onSelectAddressType("Other")}
          selected={selectedAddressType}
        />
      </View>
    </View>
  </View>
);

const SaveButton = ({ onSave }) => (
  <TouchableOpacity
    onPress={onSave}
    style={{
      backgroundColor: Colors.BRAND_SAFFRON,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10
    }}
  >
    <Text
      style={{
        color: Colors.REAL_WHITE,
        fontWeight: "600"
      }}
    >
      SAVE AND PROCEED
    </Text>
  </TouchableOpacity>
);

class SetAddress extends Component {
  constructor() {
    super();
    this.state = {
      selectedAddressType: "Home"
    };
  }

  componentWillMount() {
    let {
      address = "",
      id,
      landmark = "",
      locality = "",
      mobile_no = "",
      name = "",
      type = "",
      location = ""
    } = idx(this.props, _ => _.navigation.state.params.data) || {};

    if (type) {
      this.setState({
        selectedAddressType: type
      });
    }

    if (location) {
      this.props.change("location", location);
    }

    if (address) {
      this.props.change("address_1", address);
    }

    if (landmark) {
      this.props.change("landmark", landmark || "");
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        debugger;

        let { latitude, longitude } = idx(position, _ => _.coords) || {};

        if (latitude) {
          this.props.change("latitude", latitude);
        }

        if (longitude) {
          this.props.change("longitude", longitude);
        }
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  onSelectAddressType = type => {
    this.setState({
      selectedAddressType: type
    });
  };

  saveAddress = async () => {
    debugger;

    let { api_token } = this.props;
    let { location, address_1, landmark, name } =
      idx(this.props, _ => _.formValues) || {};
    let { selectedAddressType } = this.state;

    let { id } = idx(this.props, _ => _.navigation.state.params.data) || {};

    if (id) {
      let params = {};

      if (location) {
        params.location = location;
      }

      if (address_1) {
        params.address = address_1;
      }

      if (landmark) {
        params.landmark = landmark;
      }

      const res = await this.props.updateAddress(api_token, id, params);
      if (res) {
        this.props.navigation.pop();
      } else {
        alert("error");
      }
    } else {
      console.log("New");
    }
  };

  render() {
    const { selectedAddressType } = this.state;
    return (
      <View
        style={{
          backgroundColor: Colors.REAL_WHITE,
          flex: 1,
          paddingTop: 25
        }}
      >
        <Header
          label="Set delivery location"
          onLeft={() => this.props.navigation.pop()}
        />
        <ScrollView
          keyboardOffset={300}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10
          }}
          keyboardShouldPersistTaps="always"
        >
          {/* <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginLeft: 10
            }}
          >
            Set delivery location
          </Text> */}
          <Field
            component={FormTextInput}
            name="location"
            type="text"
            label="Location"
            prefix=""
            value={this.props.formValues.location}
          />
          <Field
            component={FormTextInput}
            name="address_1"
            type="text"
            label="House / Flat No"
            prefix=""
            value={this.props.formValues.address_1}
          />

          <Field
            component={FormTextInput}
            name="landmark"
            type="text"
            label="Landmark"
            prefix=""
            value={this.props.formValues.landmark}
          />

          <AddressTypeSelector
            selectedAddressType={selectedAddressType}
            onSelectAddressType={this.onSelectAddressType}
          />

          <SaveButton onSave={this.saveAddress} />
        </ScrollView>
      </View>
    );
  }
}

const form = reduxForm({
  form: "editaddress",
  validate: validateAddress
})(SetAddress);

const mapStateToProps = state => {
  let formValues = idx(state, _ => _.form.editaddress.values) || {};
  let api_token = idx(state, _ => _.user.api_token) || "";
  return {
    formValues,
    api_token
  };
};

export default connect(
  mapStateToProps,
  { saveAddress, updateAddress }
)(form);
