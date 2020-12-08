import React from "react";
import {Feather, View, Text, StyleSheet } from "react-native";
const BookFlight = () => {
  return (
    <View style={styles.container}>
      <Text>Bus</Text>
    </View>
  );
};
export default BookFlight;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

<View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View>
          <ImageBackground
          source={imageBackground}
          style={{ width:'100%', height:"99%"}}
          imageStyle={{opacity:0.7,backgroundColor:'black'}}
          >
            <Feather
                name="menu"
                size={29}
                color="white"
                style={{ position: "absolute", top: 30, left: 20 }}
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                }}
              />
        
          </ImageBackground>
        </View>
      </Modal>

      </View>