import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Bus = () => {
  return (
    <View style={styles.container}>
      <Text>Bus</Text>
    </View>
  );
};
export default Bus;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
