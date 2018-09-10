import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

let image_path =
  "http://delivery.fleethunt.ca/app/1/products/5b18dc75da57c.jpg";

const CartItem = () => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={{ uri: image_path }} />

    <View style={styles.itemTextWrapper}>
      <Text>Chicken Pizza</Text>
      <Text style={styles.itemSubText}>Grilled</Text>
    </View>

    <View style={styles.addItemsButtonWrapper}>
      <Text style={styles.removeItems}>-</Text>
      <Text style={styles.itemCount}>1</Text>
      <Text style={styles.addMoreItem}>+</Text>
    </View>
    <View style={styles.itemPriceWrapper}>
      <Text>$150.00</Text>
    </View>
  </View>
);

export { CartItem };
