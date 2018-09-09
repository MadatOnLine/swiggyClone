import React, {
  Component
} from "react";
import {
  Text,
  View,
  Image
} from "react-native";

import { Metrics } from "../../utils/constants";
import styles from "./styles";

const mockdata = [
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "1",
    title: "Salads"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "2",
    title: "Roosters"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "3",
    title: "Sandwich"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "4",
    title: "Sides"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "5",
    title: "Beverages"
  }
];

export class Categories extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Text> {title} </Text>
        <View style={styles.grid}>
          {mockdata.map(itm => (
            <View
              key={itm.index}
              style={styles.gridItem}
            >
              <Image
                style={styles.gridImage}
                source={itm.image}
              />
              <Text
                style={
                  styles.gridSmallText
                }
              >
                {itm.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Categories;
