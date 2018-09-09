import React, {
  Component
} from "react";

import { Provider } from "react-redux";
import GlobalFont from "react-native-global-font";

import { Fonts } from "./utils/constants";
import Navigation from "./navigation";
import configureStore from "./redux/store";

const { store } = configureStore();

export class App extends Component {
  componentDidMount() {
    GlobalFont.applyGlobal(
      Fonts.ProductSansRegular
    );
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
