import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Boat = () => {
  return (
    <View style={styles.container}>
      <Text>Boat</Text>
    </View>
  );
};
export default Boat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
