import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Flight = () => {
  return (
    <View style={styles.container}>
      <Text>Flight</Text>
    </View>
  );
};
export default Flight;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
