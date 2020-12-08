import { Text, ThemeProvider, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import React from "react";
const Train = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text h4>From</Text>
        <Input placeholder="Place" />
      </View>
      <View>
        <Text h4>To</Text>
        <Input placeholder="Place" />
      </View>
    </ThemeProvider>
  );
};
export default Train;
const theme = {
  Button: {
    title: "Hello",
    titleStyle: {
      color: "red",
    },
  },
  Text: {
    h4Style: {
      margin: "auto",
      color: "red",
    },
  },
};
