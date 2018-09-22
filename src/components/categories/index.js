import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";

import styles from "./styles";

const foodimage = require("../../assets/images/pizza_placeholder.png");
export class Categories extends Component {
  render() {
    const { title, dataSource, onItemClick, onTitleClick } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={onTitleClick} underlayColor="transparent">
          <Text style={styles.title}>{title}</Text>
        </TouchableHighlight>
        <View style={styles.grid}>
          {dataSource && dataSource.length > 0
            ? dataSource.map(itm => (
                <TouchableHighlight
                  underlayColor="transparent"
                  key={itm.id}
                  onPress={() => onItemClick(itm)}
                >
                  <View style={styles.gridItem}>
                    <Image
                      style={styles.gridImage}
                      defaultSource={foodimage}
                      source={
                        itm.image_path ? { uri: itm.image_path } : foodimage
                      }
                    />
                    <Text style={styles.gridSmallText}>{itm.title}</Text>
                  </View>
                </TouchableHighlight>
              ))
            : null}
        </View>
      </View>
    );
  }
}

export default Categories;
