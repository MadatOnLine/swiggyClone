import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TabViewAnimated, TabBar } from "react-native-tab-view";
import { Colors } from "../../utils/constants";
import SingleTabItem from "./SingleTabItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.REAL_WHITE
  },
  tabbar: {
    backgroundColor: Colors.BRAND_SAFFRON,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  page: {
    flex: 1
  },
  indicator: {
    backgroundColor: "#ffeb3b"
  },
  label: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 10
  }
});

export default class DynamicExample extends Component {
  static title = "Dynamic tab load";
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [],
    loading: true,
    data: {}
  };

  componentDidMount() {
    const { dataSource } = this.props;
    const routes = [];
    dataSource.forEach(element => {
      routes.push({
        title: element.title,
        key: String(element.id)
      });
    });

    this.setState({
      data: dataSource,
      routes,
      loading: false
    });
  }

  _handleChangeTab = index => {
    this.setState({ index });
  };

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        labelStyle={styles.label}
      />
    );
  };

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? "#D6356C" : "#222")
            )
          });
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = ({ route }) => {
    return (
      <View style={[styles.page, { backgroundColor: "#673ab7" }]}>
        <Text>
          {route.key} - {route.title}
        </Text>
      </View>
    );
  };

  renderScreen() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={props => <SingleTabItem {...props} />}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
          onIndexChange={index => this.setState({ index })}
        />
      );
    }
  }

  render() {
    return <View style={styles.container}>{this.renderScreen()}</View>;
  }
}
