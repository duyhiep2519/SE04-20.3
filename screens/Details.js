import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  DrawerActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <ScrollView>
      {route.params ? (
        <View>
          <ImageBackground
            source={route.params.place.image}
            style={{ width: "100%", height: windowHeight / 2.5 }}
            imageStyle={{ borderBottomRightRadius: 70 }}
          >
            <View style={styles.detailOverlay}>
              <AntDesign
                onPress={() => navigation.goBack()}
                style={styles.backArrow}
                name="arrowleft"
                size={26}
                color="#fff"
              />
              <View>
                <Text style={styles.placeName}>
                  <Entypo name="location-pin" size={24} color="#fff" />
                  {route.params.place.name}, {route.params.place.place}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.introPlace}>
            <Text style={styles.introText}>{route.params.place.intro}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.textAlert}>
            <Text style={{ fontSize: 20, color: "red" }}>
              Please select a location first and come back here!
            </Text>
          </View>
          <View style={styles.buttonGoHome}>
            <Button
              onPress={() => {
                navigation.dispatch(DrawerActions.jumpTo("Home"));
              }}
              title="Go back to Home screen"
            ></Button>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: windowHeight / 2.5,
    backgroundColor: "#000",
    opacity: 0.6,
    borderBottomRightRadius: 70,
  },
  placeName: {
    position: "absolute",
    top: windowHeight / 2.8,
    fontSize: 24,
    fontWeight: "200",
    color: "#fff",
  },
  introPlace: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  introText: {
    fontSize: 20,
  },
  backArrow: {
    position: "absolute",
    left: 5,
    top: 20,
  },
  buttonGoHome: {
    width: 200,
    color: "#000",
    marginTop:100
  },
  textAlert:{
    marginTop:windowHeight/3,
    paddingHorizontal:20
  }
});
