import React from "react";
import { View, Text, Image } from "react-native";
import { Colors, Metrics } from "../../utils/constants";

const foodImage = require("../../assets/images/cooking.png");
import styles from "./styles";

const cartEmpty = ({ message }) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={foodImage} />
    <Text style={styles.mainText}>GOOD FOOD IS ALWAYS COOKING</Text>
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default cartEmpty;
