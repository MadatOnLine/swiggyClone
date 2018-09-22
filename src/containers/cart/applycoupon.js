import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Metrics, Colors } from "../../utils/constants";
import Input from "../../components/inputwithlabel";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import idx from "idx";
import Button from "../../components/squarebutton";

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
    autoCapitalize="characters"
    autoFocus
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

const ApplyCoupon = ({ closeModal, couponCode }) => (
  <TouchableHighlight
    onPress={closeModal}
    style={{
      flex: 1,
      backgroundColor: "rgba(1,1,1,0.2)",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <TouchableHighlight
      onPress={null}
      style={{
        width: Metrics.FULL_WIDTH * 0.9,
        backgroundColor: "white",
        paddingVertical: 10
      }}
    >
      <View
        style={{
          width: Metrics.FULL_WIDTH * 0.9,
          backgroundColor: "white",
          paddingVertical: 10
        }}
      >
        <Field
          component={FormTextInput}
          name="code"
          type="text"
          label="Enter Coupon Code"
          prefix=""
          value={couponCode.code}
        />
        <Button
          label="APPLY"
          onPress={null}
          color={
            !couponCode.code ? Colors.TEXT_LABEL_GREY : Colors.BRAND_SAFFRON
          }
        />
      </View>
    </TouchableHighlight>
  </TouchableHighlight>
);

const Form = reduxForm({ form: "couponCode" })(ApplyCoupon);

const mapStateToProps = state => {
  let couponCode = idx(state, _ => _.form.couponCode.values) || {};
  return {
    couponCode
  };
};

export default connect(
  mapStateToProps,
  null
)(Form);
