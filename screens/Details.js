import { useRoute } from "@react-navigation/native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route);
  const place = route.params.place;

  return (
    <ScrollView>
      {place ? (
        <View>
          <ImageBackground
            source={place.image}
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
                  {place.name}, {place.place}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.introPlace}>
            <Text style={styles.introText}>{place.intro}</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text>None</Text>
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
});
