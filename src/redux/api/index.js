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
  getDashboard: function() {
    return api.get(`dashboard?store_id=${STORE_ID}`);
  }
};
