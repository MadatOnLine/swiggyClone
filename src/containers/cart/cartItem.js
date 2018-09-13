import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { IMAGE_PLACE_HOLDER } from "../../utils/constants";

const CartItem = ({
  image_path,
  title,
  subtitle,
  mrp,
  selling_price,
  count,
  onAddToCart,
  onRemoveFromCart,
  object
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
      <TouchableOpacity onPress={() => onRemoveFromCart(object)}>
        <Text style={styles.removeItems}>-</Text>
      </TouchableOpacity>

      <Text style={styles.itemCount}>{count}</Text>
      <TouchableOpacity onPress={() => onAddToCart(object)}>
        <Text style={styles.addMoreItem}>+</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemPriceWrapper}>
      <Text>{`$${selling_price}`}</Text>
    </View>
  </View>
);

export { CartItem };
