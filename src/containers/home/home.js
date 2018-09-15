import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";

import {
  getDashboardData,
  addToCart,
  removeItemFromCart
} from "../../redux/actions";

import ImageSlider from "../../components/imageslider";
import Categories from "../../components/categories";
import ImageGrid from "../../components/imagegrid";
import MenuList from "../../components/menulist";
import Header from "../../components/header";
import idx from "idx";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories || [],
      offers: props.offers || [],
      products: props.products || []
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
  }

  onAddToCart = item => {
    this.props.addToCart(item);
  };

  handleEditAddress = () => {
    this.props.navigation.navigate("EditAddress");
  };

  render() {
    const { categories, offers, products } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(255,255,255,0.5)",
          marginTop: 25
        }}
      >
        <Header onEditAddress={this.handleEditAddress} />
        <ScrollView>
          <ImageSlider
            onPress={this.onCarousalItemClicked}
            dataSource={offers}
          />
          <Categories title="Categories" dataSource={categories} />
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
  return {
    categories,
    offers,
    products
  };
};

export default connect(
  mapStateToProps,
  { getDashboardData, addToCart, removeItemFromCart }
)(Home);
