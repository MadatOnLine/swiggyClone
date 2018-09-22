import _ from "lodash";
let tax = 18;

export const getCartTotal = cart => {
  let cartMainItemTotal = 0;

  if (cart && cart.length > 0) {
    cart.forEach(element => {
      let elementTotal = element.mrp * element.count;
      cartMainItemTotal = cartMainItemTotal + elementTotal;
    });
  }

  return cartMainItemTotal;
};

export const formatNumber = number => parseFloat(number).toFixed(2);

export const getTaxAmount = amount => amount * (tax / 100);

export const validateAddress = values => {
  let error = {};

  if (!values) {
    error._error = "No Values Added";
  }

  if (!values.name) {
    error._error = "Name is required";
  }

  if (!values.locality) {
    error._error = "Name is required";
  }

  if (!values.mobile_no) {
    error._error = "Mobile Number is required";
  }

  if (!values.type) {
    error._error = "Address type is required";
  }

  if (!values.latitude) {
    error._error = "Latitude is required";
  }

  if (!values.longitude) {
    error._error = "Longitude is required";
  }

  if (!values.city) {
    error._error = "City is required";
  }

  if (!values.state) {
    error._error = "State is required";
  }

  if (!values.pincode) {
    error._error = "Pincode is required";
  }

  return error;
};
