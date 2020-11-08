import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Train = () => {
  return (
    <View style={styles.container}>
      <Text>Train</Text>
    </View>
  );
};
export default Train;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
