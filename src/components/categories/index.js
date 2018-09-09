import React, { Component } from "react";
import { Text, View, Image } from "react-native";

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

const foodimage = require("../../assets/images/pizza_placeholder.png");
export class Categories extends Component {
  render() {
    const { title, dataSource } = this.props;
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500"
          }}
        >
          {title}
        </Text>
        <View style={styles.grid}>
          {dataSource && dataSource.length > 0
            ? dataSource.map(itm => (
                <View key={itm.id} style={styles.gridItem}>
                  <Image
                    style={styles.gridImage}
                    defaultSource={foodimage}
                    source={
                      itm.image_path ? { uri: itm.image_path } : foodimage
                    }
                  />
                  <Text style={styles.gridSmallText}>{itm.title}</Text>
                </View>
              ))
            : null}
        </View>
      </View>
    );
  }
}

export default Categories;
