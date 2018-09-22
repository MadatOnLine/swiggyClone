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
  let error = [];

  if (!values) {
    error.push({ message: "No Values Added" });
  }

  if (!values.name) {
    error.push({ message: "Name is required" });
  }

  if (!values.locality) {
    error.push({ message: "Name is required" });
  }

  if (!values.mobile_no) {
    error.push({ message: "Mobile Number is required" });
  }

  if (!values.type) {
    error.push({ message: "Address type is required" });
  }

  if (!values.latitude) {
    error.push({ message: "Latitude is required" });
  }

  if (!values.longitude) {
    error.push({ message: "Longitude is required" });
  }

  if (!values.city) {
    error.push({ message: "City is required" });
  }

  if (!values.state) {
    error.push({ message: "State is required" });
  }

  if (!values.country) {
    error.push({ message: "Country is required" });
  }

  if (!values.pincode) {
    error.push({ message: "Pincode is required" });
  }

  return error;
};
