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

export const Colors = {
  BRAND_RED: "#981A1F",
  BRAND_SAFFRON: "#FF812A",
  TEXT_LABEL_GREY: "rgba(1,1,1,0.3)"
};
