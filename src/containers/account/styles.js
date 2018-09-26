import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../utils/constants";

const styles = StyleSheet.create({
  orderWrapper: {
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  orderItemNameWrapper: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.TEXT_LABEL_GREY,
    justifyContent: "space-evenly"
  },
  orderedItemsWrapper: {
    backgroundColor: Colors.REAL_WHITE,
    paddingVertical: 20
  },
  orderedItems: {
    fontWeight: "300",
    fontSize: 16,
    paddingBottom: 10,
    color: Colors.KINDA_BLACK
  },
  reOrderButton: {
    borderWidth: 2,
    borderColor: Colors.BRAND_SAFFRON,
    maxWidth: Metrics.FULL_WIDTH * 0.4,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  reOrder: {
    color: Colors.BRAND_SAFFRON,
    fontWeight: "500"
  },
  pastOrdersWrapper: {
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: Colors.REAL_WHITE,
    paddingTop: 20
  },
  addressCardWrapper: {
    flexDirection: "row",
    paddingVertical: 20
  },
  addressButtonsWrapper: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
    maxWidth: "40%"
  }
});

export default styles;
