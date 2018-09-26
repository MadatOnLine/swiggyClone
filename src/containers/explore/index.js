import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from "react-native";
import { Colors } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";
import ImageGrid from "../../components/imagegrid";
import { connect } from "react-redux";
import idx from "idx";
import { getOffers } from "../../redux/actions";

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

const OfferItem = ({ image, title, description }) => (
  <ImageBackground
    source={{ uri: image }}
    style={{
      width: "100%",
      height: 150,
      resizeMode: "contain"
    }}
  >
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(1,1,1,0.7)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15
      }}
    >
      <Text
        style={{
          color: Colors.BRAND_SAFFRON,
          fontSize: 25
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: Colors.REAL_WHITE,
          fontSize: 14,
          textAlign: "center",
          paddingVertical: 10
        }}
      >
        {description}
      </Text>
    </View>
  </ImageBackground>
);

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      searching: false
    };
  }

  componentWillMount() {
    this._getOffers();
  }

  _getOffers = async () => {
    const { api_token } = this.props;
    const res = await this.props.getOffers(api_token);
    console.log(res);
    debugger;
  };

  render() {
    const { products } = this.props;
    const { searching } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.SCREEN_WHITE,
          paddingTop: 25
        }}
      >
        {/* <SearchBar onPress={() => this.setState({ searching: true })} />
        {!searching ? (
          <ScrollView>
            <ImageGrid
              title="In the spotlight"
              dataSource={products}
              onAddToCart={() => null}
            />
          </ScrollView>
        ) : null} */}
        <FlatList
          data={this.props.offers}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <OfferItem {...item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let products = idx(state, _ => _.dashboard.data.products) || [];
  let api_token = idx(state, _ => _.user.api_token);
  let offers = idx(state, _ => _.offers.offers) || [];

  return {
    products,
    api_token,
    offers
  };
};

export default connect(
  mapStateToProps,
  { getOffers }
)(Explore);
