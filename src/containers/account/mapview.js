import React from "react";

import { StyleSheet, Dimensions, ScrollView } from "react-native";

import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = ({
  latitude = LATITUDE,
  longitude = LONGITUDE,
  children,
  onPress,
  customStyles
}) => (
  <MapView
    liteMode
    style={[styles.map, { ...customStyles }]}
    initialRegion={{
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }}
    onPress={onPress}
  >
    {children}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    height: 200
  }
});

export default Map;
