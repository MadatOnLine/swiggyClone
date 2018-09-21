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
    left: 9,
    top: 4,
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
