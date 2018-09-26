import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../utils/constants";

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomColor: Colors.TEXT_LABEL_GREY,
    borderBottomWidth: 1,
    backgroundColor: Colors.REAL_WHITE
  },
  headerInput: {
    paddingVertical: 10,
    height: 40,
    paddingHorizontal: 10,
    flex: 1
  }
});

export default styles;
