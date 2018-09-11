import { StyleSheet } from "react-native";
import { Colors } from "../../utils/constants";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 25,
    paddingBottom: 50
  },
  image: {
    width: 45,
    height: 45
  },
  itemTextWrapper: {
    justifyContent: "space-around",
    paddingLeft: 10,
    flex: 1
  },
  addItemsButtonWrapper: {
    flexDirection: "row",
    borderColor: "rgba(1,1,1,0.4)",
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: "space-between",
    maxHeight: 30
  },
  removeItems: {
    paddingRight: 10,
    justifyContent: "flex-start",
    paddingLeft: 15
  },
  itemCount: {
    paddingHorizontal: 14,
    justifyContent: "center"
  },
  addMoreItem: {
    paddingRight: 10,
    paddingLeft: 10
  },
  itemSubText: {
    fontSize: 10,
    color: Colors.TEXT_LABEL_GREY
  },
  itemPriceWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  }
});

export default styles;
