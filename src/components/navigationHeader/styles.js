import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../utils/constants";

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomColor: Colors.TEXT_LABEL_GREY,
    borderBottomWidth: 1,
    backgroundColor: Colors.REAL_WHITE,
    paddingVertical: 5
  },
  headerLabel: {
    flex: 1,
        paddingHorizontal: 10,
        top: -2,
        fontWeight : '400'
  }
});

export default styles;
