import React, { Component } from "react";
import { Text, View, Modal, Image, TouchableOpacity } from "react-native";

import { Metrics, Colors } from "../../utils/constants";
import LoginModal from "../../components/loginmodal";
import SquareButton from "../../components/squarebutton";

const LoginButton = ({ onLoginClick }) => (
  <View
    style={{
      height: Metrics.FULL_HEIGHT * 0.4,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Text>Order from wide range of pizzas</Text>
    <SquareButton label="Register" />

    <View
      style={{
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Text>Have an account ? </Text>

      <TouchableOpacity onPress={onLoginClick}>
        <Text
          style={{
            color: Colors.BRAND_SAFFRON,
            fontSize: 12
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      showLoginModal: false
    };
  }

  onLoginClick = () => {
    this.setState({
      showLoginModal: true
    });
  };

  onLoginSuccess = () => {
    this.setState(
      {
        showLoginModal: false
      },
      () => this.props.navigation.navigate("Home")
    );
  };

  render() {
    const { showLoginModal } = this.state;
    return (
      <View>
        <View
          style={{
            height: Metrics.FULL_HEIGHT * 0.6,
            backgroundColor: "green"
          }}
        >
          <Image
            style={{
              width: Metrics.FULL_WIDTH,
              height: Metrics.FULL_HEIGHT * 0.6
            }}
            source={require("../../assets/images/slide_login.png")}
          />
        </View>

        <LoginButton onLoginClick={this.onLoginClick} />
        <Modal
          visible={showLoginModal}
          transparent={true}
          animationType="slide"
        >
          <LoginModal
            dismissModal={() =>
              this.setState({
                showLoginModal: false
              })
            }
            onLoginSuccess={this.onLoginSuccess}
          />
        </Modal>
      </View>
    );
  }
}

export default LoginScreen;
