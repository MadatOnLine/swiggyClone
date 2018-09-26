import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Header from "../../components/navigationHeader";
import { Colors, Metrics } from "../../utils/constants";
import idx from "idx";
import MapView from "./mapview";
import { trackOrder } from "../../redux/actions";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { Marker } from "react-native-maps";

const mapHomeMarker = require("../../assets/images/home_pin.png");

export class TrackOrder extends Component {
  render() {
    const { latitude, longitude, order } =
      idx(this.props, _ => _.navigation.state.params) || {};

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.REAL_WHITE,
          paddingTop: 25
        }}
      >
        <Header
          label={`Track Order  # ${order.id}`}
          onLeft={this.props.navigation.pop}
        />

        <MapView
          latitude={latitude}
          longitude={longitude}
          onPress={this.onMapPress}
          customStyles={{
            height: Metrics.FULL_HEIGHT
          }}
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
      </View>
    );
  }
}

const HOC = withNavigation(TrackOrder);

const mapStateToProps = state => {
  let orderStatus = idx(state, _ => _.orderStatus);
  let api_token = idx(state, _ => _.user.api_token) || "";

  return { orderStatus, api_token };
};

export default connect(
  mapStateToProps,
  { trackOrder }
)(HOC);
