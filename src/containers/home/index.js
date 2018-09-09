import React, {
  Component
} from "react";
import {
  Text,
  View,
  ScrollView
} from "react-native";

import ImageSlider from "../../components/imageslider";
import Categories from "../../components/categories";
import ImageGrid from "../../components/imagegrid";
import MenuList from "../../components/menulist";
import Header from "../../components/header";

export class Home extends Component {
  onCarousalItemClicked = item => {
    console.log("Clicked on", item);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:
            "rgba(255,255,255,0.5)",
          marginTop: 25
        }}
      >
        <Header />
        <ScrollView>
          <ImageSlider
            onPress={
              this.onCarousalItemClicked
            }
          />
          <Categories title="Categories" />
          <ImageGrid title="Best Sellers" />
          {/* <MenuList title="Best Sellers" /> */}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
