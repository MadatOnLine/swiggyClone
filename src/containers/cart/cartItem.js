import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { IMAGE_PLACE_HOLDER } from "../../utils/constants";

const CartItem = ({
  image_path,
  title,
  subtitle,
  mrp,
  selling_price,
  count
}) => (
  <View style={styles.wrapper}>
    <Image
      defaultSource={IMAGE_PLACE_HOLDER}
      style={styles.image}
      source={image_path ? { uri: image_path } : IMAGE_PLACE_HOLDER}
    />

    <View style={styles.itemTextWrapper}>
      <Text>{title}</Text>
      <Text style={styles.itemSubText}>{subtitle}</Text>
    </View>

    <View style={styles.addItemsButtonWrapper}>
      <Text style={styles.removeItems}>-</Text>
      <Text style={styles.itemCount}>{count}</Text>
      <Text style={styles.addMoreItem}>+</Text>
    </View>
    <View style={styles.itemPriceWrapper}>
      <Text>{`$${selling_price}`}</Text>
    </View>
  </View>
);

export { CartItem };
