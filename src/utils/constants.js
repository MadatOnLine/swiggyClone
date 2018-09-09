import { Dimensions } from "react-native";
const window = Dimensions.get("window");

export const Metrics = {
  FULL_WIDTH: window.width,
  FULL_HEIGHT: window.height
};

export const Fonts = {
  ProductSansBold: "ProductSans-Bold",
  ProductSansBoldItalic:
    "ProductSans-BoldItalic",
  ProductSansItalic:
    "ProductSans-Italic",
  ProductSansRegular:
    "ProductSans-Regular"
};
