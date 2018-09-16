import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";

import {
  getDashboardData,
  addToCart,
  removeItemFromCart,
  getCategoryItemsById
} from "../../redux/actions";

import ImageSlider from "../../components/imageslider";
import Categories from "../../components/categories";
import ImageGrid from "../../components/imagegrid";
import MenuList from "../../components/menulist";
import Header from "../../components/header";
import idx from "idx";
import { GET_ADDRESSES_FAILED } from "../../redux/constants";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories || [],
      offers: props.offers || [],
      products: props.products || [],
      selectedAddress: props.selectedAddress
    };
  }

  onCarousalItemClicked = item => {
    console.log("Clicked on", item);
  };

  componentDidMount() {
    this.resolveDashboardData();
  }

  resolveDashboardData = async () => {
    let res = await this.props.getDashboardData();
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps &&
      nextProps.categories &&
      nextProps.categories !== this.props.categories
    ) {
      this.setState({
        categories: nextProps.categories
      });
    }

    if (
      nextProps &&
      nextProps.offers &&
      nextProps.offers !== this.props.offers
    ) {
      this.setState({
        offers: nextProps.offers
      });
    }

    if (
      nextProps &&
      nextProps.products &&
      nextProps.products !== this.props.products
    ) {
      this.setState({
        products: nextProps.products
      });
    }

    if (
      nextProps &&
      nextProps.selectedAddress &&
      nextProps.selectedAddress !== this.props.selectedAddress
    ) {
      this.setState({
        selectedAddress: nextProps.selectedAddress
      });
    }
  }

  onAddToCart = item => {
    this.props.addToCart(item);
  };

  handleEditAddress = () => {
    this.props.navigation.navigate("EditAddress");
  };

  onCategoryItemClick = async item => {
    await this.props.getCategoryItemsById(item.id);
    this.props.navigation.navigate("CategoryDetail", { item: item });
  };

  render() {
    const { categories, offers, products, selectedAddress } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(255,255,255,0.5)",
          marginTop: 25
        }}
      >
        <Header
          onEditAddress={this.handleEditAddress}
          selectedAddress={selectedAddress}
        />
        <ScrollView>
          <ImageSlider
            onPress={this.onCarousalItemClicked}
            dataSource={offers}
          />
          <Categories
            title="Categories"
            dataSource={categories}
            onItemClick={this.onCategoryItemClick}
          />
          <ImageGrid
            title="Best Sellers"
            dataSource={products}
            onAddToCart={this.onAddToCart}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let categories = idx(state, _ => _.dashboard.data.categories) || [];
  let offers = idx(state, _ => _.dashboard.data.offers) || [];
  let products = idx(state, _ => _.dashboard.data.products) || [];
  let api_token = idx(state, _ => _.user.api_token) || "";
  let selectedAddress = idx(state, _ => _.addresses.selectedAddress);
  return {
    categories,
    offers,
    products,
    selectedAddress,
    api_token
  };
};

export default connect(
  mapStateToProps,
  { getDashboardData, addToCart, removeItemFromCart, getCategoryItemsById }
)(Home);
