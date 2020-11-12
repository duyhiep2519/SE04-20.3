import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Navigator from "./Navigator";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
};
export default App;
