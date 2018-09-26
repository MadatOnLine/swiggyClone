import React from "react";
import { View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const Header = ({
  onChangeText,
  maxLength,
  secureEntry,
  keyboardType,
  value,
  onLeft
}) => (
  <View style={styles.headerWrapper}>
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
        onLeft();
      }}
    >
      <Icon
        name="ios-arrow-round-back-outline"
        size={25}
        color={Colors.KINDA_BLACK}
      />
    </TouchableOpacity>
    <TextInput
      maxLength={maxLength}
      secureTextEntry={secureEntry}
      keyboardType={keyboardType}
      style={styles.headerInput}
      onChangeText={text => onChangeText(text)}
      value={value}
      autoFocus={true}
      placeholder="Enter area,street name..."
    />
    <TouchableOpacity>
      <Icon name="ios-search-outline" size={20} color={Colors.KINDA_BLACK} />
    </TouchableOpacity>
  </View>
);

export default Header;
