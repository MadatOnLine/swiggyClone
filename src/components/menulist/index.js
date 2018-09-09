import React, {
  Component
} from "react";
import {
  Text,
  View
} from "react-native";

export class MenuList extends Component {
  render() {
    const { title } = this.props;
    return (
      <View>
        <Text> {title} </Text>
      </View>
    );
  }
}

export default MenuList;
