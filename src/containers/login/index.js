import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

import { Metrics, Colors } from "../../utils/constants";
import LoginModal from "../../components/loginmodal";
import RegisterModal from "../../components/registerModal";

import SquareButton from "../../components/squarebutton";

const LoginButton = ({ onLoginClick, onRegisterClick }) => (
  <View
    style={{
      height: Metrics.FULL_HEIGHT * 0.4,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Text>Order from wide range of pizzas</Text>
    <SquareButton label="Register" onPress={onRegisterClick} />

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
      showLoginModal: false,
      showRegisterModal: false,
      showOTPModal: false
    };
  }

  onLoginClick = () => {
    this.setState({
      showLoginModal: true
    });
  };

  onRegisterClick = () => {
    this.setState({
      showRegisterModal: true
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

  onRegisterSuccess = cb => {};

  onRegisteredUserError = message => {
    this.setState(
      {
        showRegisterModal: false
      },
      () => {
        setTimeout(() => {
          Alert.alert(
            "SORRY",
            message,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }, 1000);
      }
    );
  };

  dismissModal = () => {
    this.setState({
      showLoginModal: false,
      showOTPModal: false,
      showRegisterModal: false
    });
  };

  render() {
    const { showLoginModal, showRegisterModal } = this.state;
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

        <LoginButton
          onLoginClick={this.onLoginClick}
          onRegisterClick={this.onRegisterClick}
        />
        <Modal
          visible={showLoginModal}
          transparent={true}
          animationType="slide"
        >
          <LoginModal
            dismissModal={this.dismissModal}
            onLoginSuccess={this.onLoginSuccess}
          />
        </Modal>

        <Modal
          visible={showRegisterModal}
          transparent={true}
          animationType="slide"
        >
          <RegisterModal
            dismissModal={this.dismissModal}
            onRegisterSuccess={this.onRegisterSuccess}
            onRegisteredUserError={this.onRegisteredUserError}
          />
        </Modal>
      </View>
    );
  }
}

export default LoginScreen;
