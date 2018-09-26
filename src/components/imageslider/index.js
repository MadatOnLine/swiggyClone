import React, { Component } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";

import { IMAGE_PLACE_HOLDER, Metrics } from "../../utils/constants";

const ImageComponent = ({ image_path }) => (
  <Image
    defaultSource={IMAGE_PLACE_HOLDER}
    style={{
      width: Metrics.FULL_WIDTH - 10,
      height: 200,
      marginRight: 10,
      resizeMode: "cover"
    }}
    source={{ uri: image_path }}
  />
);

export class ImageSlider extends Component {
  renderListItem = item => (
    <TouchableOpacity onPress={() => this.props.onPress(item)}>
      <ImageComponent {...item} />
    </TouchableOpacity>
  );

  render() {
    const { dataSource } = this.props;
    return (
      <View
        style={{
          backgroundColor: "white",
          height: 200
        }}
      >
        <FlatList
          data={dataSource}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => this.renderListItem(item)}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

export default ImageSlider;
