import axios from "axios";
const SERVER_IP =
  "http://delivery.fleethunt.ca/api";

var api = axios.create({
  baseURL: SERVER_IP
});

module.exports = {
  login: function name(params) {
    return api.post(
      "customer/authenticate",
      JSON.stringify(
        "mobile_no=9017300078&password=5602&provider=password&store_id=1"
      )
    );
  }
};
