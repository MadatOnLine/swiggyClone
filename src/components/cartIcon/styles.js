import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cartIconWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  countWrapper: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "red",
    left: 12,
    top: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    fontSize: 9,
    color: "white",
    fontWeight: "500"
  }
});

export default styles;
