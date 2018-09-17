import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Header from "../../components/navigationHeader";
import { Colors } from "../../utils/constants";
import Input from "../../components/inputwithlabel";
import { Field, reduxForm } from "redux-form";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import idx from "idx";
import ScrollView from "react-native-input-scroll-view";

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
      borderBottomWidth: selected === label ? 2 : 0,
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

const SaveButton = () => (
  <View
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
  </View>
);

class SetAddress extends Component {
  constructor() {
    super();
    this.state = {
      selectedAddressType: "Home"
    };
  }

  onSelectAddressType = type => {
    this.setState({
      selectedAddressType: type
    });
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

          <SaveButton />
        </ScrollView>
      </View>
    );
  }
}

const form = reduxForm({
  form: "editaddress"
})(SetAddress);

const mapStateToProps = state => {
  let formValues = idx(state, _ => _.form.editaddress.values) || {};
  return {
    formValues
  };
};

export default connect(
  mapStateToProps,
  null
)(form);
