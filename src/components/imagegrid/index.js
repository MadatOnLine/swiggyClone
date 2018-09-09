import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import _ from "lodash";

import { Metrics, IMAGE_PLACE_HOLDER } from "../../utils/constants";
import styles from "./styles";

export class ImageGrid extends Component {
  render() {
    const { title, dataSource, onAddToCart } = this.props;
    return (
      <View style={styles.container}>
        <Text> {title} </Text>
        <View style={styles.grid}>
          {dataSource && dataSource.length > 0
            ? dataSource.map(itm => (
                <View
                  key={itm.id}
                  style={[
                    styles.gridItem,
                    {
                      justifyContent: "space-around"
                    }
                  ]}
                >
                  <Image
                    style={styles.gridImage}
                    defaultSource={IMAGE_PLACE_HOLDER}
                    source={
                      itm.image_path
                        ? { uri: itm.image_path }
                        : IMAGE_PLACE_HOLDER
                    }
                  />
                  <View
                    style={{
                      marginVertical: 10
                    }}
                  >
                    <Text style={styles.gridSmallTex}>{itm.title}</Text>
                  </View>

                  <View
                    style={{
                      marginBottom: 10
                    }}
                  >
                    <Text>
                      {_.truncate(itm.subtitle, {
                        length: 50,
                        separator: "..."
                      })}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        flex: 1
                      }}
                    >
                      ${itm.selling_price}
                    </Text>
                    <TouchableOpacity
                      onPress={() => onAddToCart(itm)}
                      style={{
                        borderWidth: 1,
                        borderColor: "green",
                        height: 40,
                        paddingHorizontal: 20,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "500",
                          color: "green"
                        }}
                      >
                        ADD
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            : null}
        </View>
      </View>
    );
  }
}

export default ImageGrid;
