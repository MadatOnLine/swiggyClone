import React, {
  Component
} from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

const images = [
  {
    image: require("../../assets/images/sliderimage.jpg"),
    index: "1"
  },
  {
    image: require("../../assets/images/sliderimage.jpg"),
    index: "2"
  },
  {
    image: require("../../assets/images/sliderimage.jpg"),
    index: "3"
  },
  {
    image: require("../../assets/images/sliderimage.jpg"),
    index: "4"
  },
  {
    image: require("../../assets/images/sliderimage.jpg"),
    index: "5"
  }
];

const ImageComponent = ({ image }) => (
  <Image
    style={{
      width: 340,
      height: 200,
      marginRight: 10
    }}
    source={image}
  />
);

export class ImageSlider extends Component {
  renderListItem = item => (
    <TouchableOpacity
      onPress={() =>
        this.props.onPress(item)
      }
    >
      <ImageComponent {...item} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          height: 200
        }}
      >
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={
            false
          }
          renderItem={({ item }) =>
            this.renderListItem(item)
          }
          keyExtractor={item =>
            item.index
          }
        />
      </View>
    );
  }
}

export default ImageSlider;
