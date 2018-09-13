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
