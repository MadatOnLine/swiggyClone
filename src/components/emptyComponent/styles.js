import { StyleSheet } from "react-native";

import { Colors, Metrics } from "../../utils/constants";
const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: Colors.REAL_WHITE,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: Metrics.FULL_WIDTH * 0.6,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20
  },
  mainText: {
    fontWeight: "500",
    fontSize: 12,
    marginVertical: 10
  },
  message: {
    fontWeight: "300",
    fontSize: 9,
    marginVertical: 10,
    color: Colors.TEXT_LABEL_GREY
  }
});

export default styles;
