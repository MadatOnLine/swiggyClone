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
    index: "1"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "2"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "3"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "4"
  },
  {
    image: require("../../assets/images/foodimage.jpg"),
    index: "5"
  }
];

export class ImageGrid extends Component {
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
                  styles.gridSmallTex
                }
              >
                RICE BOLWS
              </Text>
              <Text>
                Peri Peri Potato Rice
                Bowls(Mini)
              </Text>

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
                  ₹129
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor:
                      "green",
                    height: 40,
                    paddingHorizontal: 20,
                    justifyContent:
                      "center",
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
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default ImageGrid;
