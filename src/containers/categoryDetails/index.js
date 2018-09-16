import React, { Component } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { Colors } from "../../utils/constants";
import idx from "idx";
import { connect } from "react-redux";

import Header from "../../components/navigationHeader";
import Empty from "../../components/emptyComponent";

import { addToCart } from "../../redux/actions";

const NONVEG = ({ is_non_veg }) => (
  <View
    style={{
      width: 15,
      height: 15,
      backgroundColor: "transparent",
      borderColor: is_non_veg === 0 ? Colors.BRAND_GREEN : Colors.BRAND_RED,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5
    }}
  >
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor:
          is_non_veg === 0 ? Colors.BRAND_GREEN : Colors.BRAND_RED,
        borderColor: is_non_veg === 0 ? Colors.BRAND_GREEN : Colors.BRAND_RED,
        borderWidth: 1
      }}
    />
  </View>
);

const AddToCartButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="transparent"
    style={{
      width: 60,
      height: 25,
      borderColor: Colors.BRAND_GREEN,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 10
    }}
  >
    <Text
      style={{
        fontSize: 10,
        color: Colors.BRAND_GREEN,
        fontWeight: "600"
      }}
    >
      ADD
    </Text>
  </TouchableHighlight>
);

const CategorySection = ({
  is_non_veg = false,
  title,
  subtitle,
  selling_price,
  onAddToCart
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10
    }}
  >
    <NONVEG is_non_veg={is_non_veg} />

    <View
      style={{
        flex: 1,
        marginHorizontal: 10
      }}
    >
      <Text
        style={{
          paddingBottom: 5
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: Colors.TEXT_LABEL_GREY,
          paddingBottom: 5
        }}
      >
        {subtitle}
      </Text>
      <Text>{selling_price}</Text>
    </View>

    <AddToCartButton onPress={onAddToCart} />
  </View>
);

const EmptySection = () => <View />;

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => this.props.navigation.pop();

  render() {
    let categoryItem = idx(this.props, _ => _.navigation.state.params.item);
    let { categoryItems } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.REAL_WHITE,
          paddingTop: 25
        }}
      >
        <Header label={categoryItem.title} onLeft={this.goBack} />
        <FlatList
          contentContainerStyle={
            categoryItems.length < 1
              ? {
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1
                }
              : {
                  paddingHorizontal: 10,
                  paddingTop: 10
                }
          }
          data={categoryItems}
          ListEmptyComponent={() => (
            <Empty message="Sorry ! We could not find what you are looking for" />
          )}
          renderItem={({ item }) => (
            <CategorySection
              {...item}
              onAddToCart={() => this.props.addToCart(item)}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let categoryItems = idx(state, _ => _.categoryItems);
  return {
    categoryItems
  };
};
export default connect(
  mapStateToProps,
  { addToCart }
)(CategoryDetail);
