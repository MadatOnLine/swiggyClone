import React from "react";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const Header = ({ label, onLeft, rightIcon }) => (
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

    <Text style={styles.headerLabel}>{label}</Text>
    {rightIcon ? (
      <TouchableOpacity>
        <Icon name="ios-search-outline" size={20} color={Colors.KINDA_BLACK} />
      </TouchableOpacity>
    ) : null}
  </View>
);

export default Header;
