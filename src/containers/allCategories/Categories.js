import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import Categories from "../../components/categories";
import idx from "idx";
import { connect } from "react-redux";
import { Colors } from "../../utils/constants";
import Header from "../../components/navigationHeader";
import { withNavigation } from "react-navigation";
import { getCategoryItemsById } from "../../redux/actions";

const SHOW_TABS = true;

const TabsComponent = ({ dataSource, activeItem }) =>
  console.log("Items", dataSource) || (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {dataSource && dataSource.length > 0
        ? dataSource.map((i, index) => (
            <View
              key={index}
              style={{
                paddingVertical: 10,
                minWidth: 80,
                marginRight: 10,
                // backgroundColor: Colors.REAL_WHITE,
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: Colors.BRAND_GREEN,
                borderBottomWidth: 4
              }}
            >
              <Text
                style={{
                  color: Colors.REAL_WHITE
                }}
              >
                {i.title}
              </Text>
            </View>
          ))
        : null}
    </ScrollView>
  );

export class AllCategories extends Component {
  onCategoryItemClick = async item => {
    const { api_token } = this.props;
    await this.props.getCategoryItemsById(item.id, api_token);
    this.props.navigation.navigate("CategoryDetail", { item: item });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.REAL_WHITE,
          paddingTop: 25
        }}
      >
        <Header label="Categories" onLeft={this.props.navigation.pop} />
        <View
          style={{
            backgroundColor: Colors.BRAND_SAFFRON
          }}
        >
          <TabsComponent dataSource={this.props.categories} />
        </View>

        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <Categories
            dataSource={this.props.categories}
            onItemClick={this.onCategoryItemClick}
          />
        </ScrollView> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  let categories = idx(state, _ => _.allCategories) || [];
  let api_token = idx(state, _ => _.user.api_token) || "";
  return {
    categories,
    api_token
  };
};

const _Categories = withNavigation(AllCategories);

export default connect(
  mapStateToProps,
  { getCategoryItemsById }
)(_Categories);
