import React, {
  Component
} from "react";
import Navigation from "./navigation";

import GlobalFont from "react-native-global-font";
import { Fonts } from "./utils/constants";

export class App extends Component {
  componentDidMount() {
    GlobalFont.applyGlobal(
      Fonts.ProductSansRegular
    );
  }

  render() {
    return <Navigation />;
  }
}

export default App;
