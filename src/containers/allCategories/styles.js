import { StyleSheet } from "react-native";
import { Colors } from "../../utils/constants";

const styles = StyleSheet.create({
  nonVegWrapper: {
    width: 15,
    height: 15,
    backgroundColor: "transparent",

    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5
  },
  nonvegItem: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    borderWidth: 1
  },
  addToCartButton: {
    width: 60,
    height: 25,
    borderColor: Colors.BRAND_GREEN,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  addToCartButtonText: {
    fontSize: 10,
    color: Colors.BRAND_GREEN,
    fontWeight: "600"
  },
  categoryItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  titleWrapper: {
    flex: 1,
    marginHorizontal: 10
  },
  subtitleText: {
    fontSize: 12,
    color: Colors.TEXT_LABEL_GREY,
    paddingBottom: 5
  }
});

export default styles;
