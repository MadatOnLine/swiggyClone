import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import ImageGrid from "../../components/imagegrid";
import { connect } from "react-redux";
import idx from "idx";

const SearchBar = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      borderWidth: 2,
      borderColor: Colors.TEXT_LABEL_GREY,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 10,
      marginVertical: 10
    }}
  >
    <View
      style={{
        flex: 1
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: "rgba(1,1,1,0.8)"
        }}
      >
        Search for items here
      </Text>
    </View>
    <Icon name="ios-search" size={25} color="rgba(1,1,1,0.8)" />
  </TouchableOpacity>
);

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      searching: false
    };
  }

  render() {
    const { products } = this.props;
    const { searching } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.SCREEN_WHITE,
          paddingTop: 25
          // paddingHorizontal: 10
        }}
      >
        <SearchBar onPress={() => this.setState({ searching: true })} />
        {!searching ? (
          <ScrollView>
            <ImageGrid
              title="In the spotlight"
              dataSource={products}
              onAddToCart={() => null}
            />
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  let products = idx(state, _ => _.dashboard.data.products) || [];
  return {
    products
  };
};

export default connect(
  mapStateToProps,
  null
)(Explore);
