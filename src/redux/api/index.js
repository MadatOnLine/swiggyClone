import axios from "axios";
const SERVER_IP = "http://delivery.fleethunt.ca/api/";
const STORE_ID = 1;

var api = axios.create({
  baseURL: SERVER_IP
});

module.exports = {
  login: function({ mobile_no, password }) {
    return api.post(
      "customer/authenticate",
      `mobile_no=${mobile_no}&password=${password}&provider=password&store_id=${STORE_ID}`
    );
  },
  register: function({ mobile_no, email, name, password }) {
    return api.post(
      "customer/signup",
      `mobile_no=${mobile_no}&email=${email}& name=${name}&password=${password}&store_id=${STORE_ID}`
    );
  },
  getDashboard: function() {
    return api.get(`dashboard?store_id=${STORE_ID}`);
  },
  getPastOrders: function(accessToken) {
    return api.get(`http://delivery.fleethunt.ca/v1/customer/orders`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
  },
  getAddresses: function(accessToken) {
    return api.get(`customer/addresses`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
  },
  getCategoryItems: function(categoryId, accessToken) {
    return api.get(
      `category/items?category_id=${categoryId}&store_id=${STORE_ID}&offset=0&page_size=25`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    );
  },
  getAllCategories: function(accessToken) {
    return api.get(
      `http://delivery.fleethunt.ca/v1/customer/categories?store_id=1`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    );
  }
};
