import React, { Component } from "react";
import { Text, View, Image } from "react-native";

import { Metrics } from "../../utils/constants";
import styles from "./styles";

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
