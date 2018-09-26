import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Metrics, Colors } from "../../utils/constants";
import Input from "../inputwithlabel";
import SquareButton from "../squarebutton";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import idx from "idx";
import { register } from "../../redux/actions";
import Toast from "react-native-simple-toast";

import KeyboardSpacer from "react-native-keyboard-spacer";

const validate = ({ mobilenumber, password }) => {
  let error = {};

  if (!mobilenumber || String(mobilenumber).length !== 10) {
    error = "Invalid mobile Number";
  }
  if (!password) {
    error = "Password is required";
  }
  return error;
};

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
    autoCorrect={props.autoCorrect}
    autoCapitalize={props.autoCapitalize || "none"}
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

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadyRegistered: false,
      message: props.errorMessage
    };
  }

  handleRegister = async () => {
    const { formValues, hasError } = this.props;
    let { mobilenumber, password, name, email } = formValues;
    if (mobilenumber && password && name && email && !hasError) {
      const res = await this.props.register({
        mobile_no: mobilenumber,
        email,
        name,
        password: password
      });
      if (res && res.message) {
        this.props.onRegisteredUserError(res.message);
      }
    }
  };

  render() {
    const { dismissModal, hasError } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent"
        }}
      >
        <TouchableOpacity
          onPress={dismissModal}
          style={{
            backgroundColor: "rgba(1,1,1,0.5)",
            flex: 1
          }}
        />

        <View
          style={{
            backgroundColor: "white"
          }}
        >
          <Field
            component={FormTextInput}
            name="name"
            type="text"
            label="Your Name"
            prefix=""
            value={this.props.formValues.name}
            autoFocus
            autoCapitalize="sentences"
          />

          <Field
            component={FormTextInput}
            name="mobilenumber"
            type="text"
            label="Enter your 10 Digit mobile number"
            prefix="+91"
            value={this.props.formValues.mobilenumber}
            keyboardType="number-pad"
          />

          <Field
            component={FormTextInput}
            name="email"
            type="text"
            label="Email"
            prefix=""
            secureEntry={false}
            value={this.props.formValues.email}
          />

          <Field
            component={FormTextInput}
            name="password"
            type="text"
            label="Password"
            prefix=""
            secureEntry={true}
            value={this.props.formValues.password}
          />

          <SquareButton
            position="center"
            width={Metrics.FULL_WIDTH}
            color={Colors.BRAND_SAFFRON}
            label="Register"
            inactive={hasError ? true : false}
            onPress={this.handleRegister}
          />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }
}

const RegisterModalForm = reduxForm({
  form: "registerForm",
  validate: validate
})(RegisterModal);

const mapStateToProps = state => {
  let formValues = idx(state, _ => _.form.registerForm.values) || {};
  let formErrors = idx(state, _ => _.form.registerForm.syncErrors) || "";

  return {
    formValues,
    hasError: formErrors ? true : false
  };
};

export default connect(
  mapStateToProps,
  { register }
)(RegisterModalForm);
