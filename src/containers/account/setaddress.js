import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
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
import MapView from "./mapview";
import { Marker } from "react-native-maps";

const mapHomeMarker = require("../../assets/images/home_pin.png");

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

const SaveButton = ({ onSave, disabled, handleFormError }) => (
  <TouchableOpacity
    onPress={disabled ? handleFormError : onSave}
    style={{
      backgroundColor: disabled ? Colors.TEXT_LABEL_GREY : Colors.BRAND_SAFFRON,
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

  handleFormError = () => {
    let { error } = this.props;
    // let lastIndex = Object.keys(errors).length - 1;

    Alert.alert(
      "Required Field Missing",
      error,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

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
      this.setState({ selectedAddressType: type });
      this.props.change("type", type);
    } else {
      this.props.change("type", "Home");
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
        let { latitude, longitude } = idx(position, _ => _.coords) || {};

        if (latitude) {
          this.props.change("latitude", latitude);
        }

        if (longitude) {
          this.props.change("longitude", longitude);
        }
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  onSelectAddressType = type => {
    this.setState({ selectedAddressType: type }, () =>
      this.props.change("type", type)
    );
  };

  saveAddress = async () => {
    let { api_token } = this.props;
    let { selectedAddressType } = this.state;
    let { id } = idx(this.props, _ => _.navigation.state.params.data) || {};

    debugger;
    let params = idx(this.props, _ => _.formValues) || {};
    params.type = selectedAddressType;

    if (id) {
      debugger;
      const res = await this.props.updateAddress(api_token, id, params);
      if (res) {
        this.props.navigation.pop();
      } else {
        alert("error");
      }
    } else {
      debugger;
      const res = await this.props.saveAddress(api_token, params);
      if (res) {
        this.props.navigation.pop();
      } else {
        alert("error");
      }
    }
  };

  onMapPress(e) {
    console.log(e.nativeEvent);
  }

  render() {
    const { selectedAddressType } = this.state;
    const { latitude, longitude } = idx(this.props, _ => _.formValues) || {};
    const { error } = this.props;
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

        <ScrollView keyboardOffset={300} keyboardShouldPersistTaps="always">
          <MapView
            latitude={latitude}
            longitude={longitude}
            onPress={this.onMapPress}
          >
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(1,1,1,0.9)",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2
                }}
              >
                <Image
                  source={mapHomeMarker}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: Colors.REAL_WHITE,
                    resizeMode: "contain"
                  }}
                />
              </View>
            </Marker>
          </MapView>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              paddingBottom: 100
            }}
          >
            <Field
              component={FormTextInput}
              name="name"
              type="numeric"
              label="Your Name"
              prefix=""
              value={this.props.formValues.name}
            />

            <Field
              component={FormTextInput}
              name="mobile_no"
              keyboardType="number-pad"
              label="Mobile Number"
              prefix=""
              value={this.props.formValues.mobile_number}
            />

            <Field
              component={FormTextInput}
              name="locality"
              type="text"
              label="Locality"
              prefix=""
              value={this.props.formValues.locality}
            />
            <Field
              component={FormTextInput}
              name="address"
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

            <Field
              component={FormTextInput}
              name="city"
              type="text"
              label="City"
              prefix=""
              value={this.props.formValues.city}
            />

            <Field
              component={FormTextInput}
              name="state"
              type="text"
              label="State"
              prefix=""
              value={this.props.formValues.state}
            />

            <Field
              component={FormTextInput}
              name="pincode"
              type="text"
              label="Pincode"
              prefix=""
              value={this.props.formValues.pincode}
            />

            <AddressTypeSelector
              selectedAddressType={selectedAddressType}
              onSelectAddressType={this.onSelectAddressType}
            />

            <SaveButton
              onSave={this.saveAddress}
              disabled={this.props.error}
              handleFormError={this.handleFormError}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const form = reduxForm({ form: "editaddress", validate: validateAddress })(
  SetAddress
);

const mapStateToProps = state => {
  let formValues = idx(state, _ => _.form.editaddress.values) || {};
  let api_token = idx(state, _ => _.user.api_token) || "";
  let error = idx(state, _ => _.form.editaddress.error) || "";
  return { formValues, api_token, error };
};

export default connect(
  mapStateToProps,
  { saveAddress, updateAddress }
)(form);
