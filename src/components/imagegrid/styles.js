import { StyleSheet } from "react-native";
import { Metrics } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  grid: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  gridItem: {
    width: Metrics.FULL_WIDTH * 0.45,
    margin: 2,
    marginVertical: 10
  },
  gridImage: {
    width: Metrics.FULL_WIDTH * 0.45,
    height: 150
  },
  gridSmallText: {
    fontSize: 16,
    color: "rgba(1,1,1,0.5)",
    paddingVertical: 5
  }
});

export default styles;
