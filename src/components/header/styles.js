import { StyleSheet } from "react-native";
import { Colors } from "../../utils/constants";

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 5,
    backgroundColor: "white",
    paddingHorizontal: 10
    // width: 140
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    flex: 1
  },
  addressWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5
  },
  addressLabel: {
    fontSize: 13,
    fontWeight: "500"
  },
  downIcon: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconStyle: {
    top: 2,
    marginLeft: 5
  },
  addressSubText: {
    fontSize: 10,
    color: Colors.TEXT_LABEL_GREY
  }
});

export default styles;
