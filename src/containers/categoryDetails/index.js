import React, { Component } from "react";
import { View, Text, FlatList, TouchableHighlight, Modal } from "react-native";
import { Colors, Metrics } from "../../utils/constants";
import idx from "idx";
import { connect } from "react-redux";

import Header from "../../components/navigationHeader";
import Empty from "../../components/emptyComponent";
import styles from "./styles";

import { addToCart } from "../../redux/actions";

const NONVEG = ({ is_non_veg }) => (
  <View
    style={[
      styles.nonVegWrapper,
      {
        borderColor: is_non_veg === 0 ? Colors.BRAND_GREEN : Colors.BRAND_RED
      }
    ]}
  >
    <View
      style={[
        styles.nonvegItem,
        {
          backgroundColor:
            is_non_veg === 0 ? Colors.BRAND_GREEN : Colors.BRAND_RED,
          borderColor: is_non_veg === 0 ? Colors.BRAND_GREEN : Colors.BRAND_RED
        }
      ]}
    />
  </View>
);

const AddToCartButton = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="transparent"
    style={styles.addToCartButton}
  >
    <Text style={styles.addToCartButtonText}>ADD</Text>
  </TouchableHighlight>
);

const CategorySection = ({
  is_non_veg = false,
  title,
  subtitle,
  selling_price,
  onAddToCart
}) => (
  <View style={styles.categoryItemWrapper}>
    <NONVEG is_non_veg={is_non_veg} />

    <View style={styles.titleWrapper}>
      <Text
        style={{
          paddingBottom: 5
        }}
      >
        {title}
      </Text>
      <Text style={styles.subtitleText}>{subtitle}</Text>
      <Text>{selling_price}</Text>
    </View>

    <AddToCartButton onPress={onAddToCart} />
  </View>
);

const AddOnItem = ({
  is_non_veg = false,
  display_name,
  subtitle,
  price,
  onAddToCart
}) => (
  <View style={styles.categoryItemWrapper}>
    <NONVEG is_non_veg={is_non_veg} />

    <View style={styles.titleWrapper}>
      <Text
        style={{
          paddingBottom: 5
        }}
      >
        {display_name}
      </Text>
      <Text style={styles.subtitleText}>{subtitle}</Text>
      <Text>{price}</Text>
    </View>

    <AddToCartButton onPress={onAddToCart} />
  </View>
);

const EmptySection = () => <View />;

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addonModal: false,
      addons: []
    };
  }

  goBack = () => this.props.navigation.pop();

  handleAddToCart = item => {
    debugger;
    if (item && item.product_addons && item.product_addons.length > 0) {
      this.setState({
        addonModal: true,
        addons: item.product_addons
      });
    } else {
      this.props.addToCart(item);
    }
  };

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
              onAddToCart={() => this.handleAddToCart(item)}
            />
          )}
          keyExtractor={item => String(item.id)}
        />

        <Modal visible={this.state.addonModal} transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(1,1,1,0.1)",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                width: Metrics.FULL_WIDTH * 0.95,
                minHeight: 180,
                maxHeight: Metrics.FULL_HEIGHT * 0.8,
                backgroundColor: Colors.REAL_WHITE
              }}
            >
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
                data={this.state.addons}
                ListEmptyComponent={() => (
                  <Empty message="Sorry ! We could not find what you are looking for" />
                )}
                renderItem={({ item }) => (
                  <AddOnItem
                    {...item}
                    onAddToCart={() => this.handleAddToCart(item)}
                  />
                )}
                keyExtractor={item => String(item.id)}
              />
            </View>
          </View>
        </Modal>
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
