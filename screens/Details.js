import { AntDesign } from "@expo/vector-icons";
import {
  DrawerActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import StarReview from "../helper/StarReview";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ecf0f1"
        translucent={true}
      />
      {route.params ? (
        <View style={styles.container}>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginRight: windowWidth / 2.3,
                marginTop: 20,
              }}
            >
              {route.params.place.name}
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginRight: windowWidth / 2.3,
              }}
            >
              {route.params.place.place}
            </Text>
          </View>
          <FlatList
            horizontal
            data={route.params.place.image}
            renderItem={({ item }) => (
              <View style={styles.imageBackground}>
                <Image source={item} style={styles.image} />
                <View style={styles.location}>
                  <Text style={styles.placeName}>
                    {route.params.place.name}
                  </Text>
                  <Text style={styles.placeName}>
                    <StarReview rate={4.5} />
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => "key" + index}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.introPlace}>
            <Text style={styles.about}>About</Text>

            <Text style={styles.introText}>{route.params.place.intro}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnBook}
            onPress={() => navigation.navigate("Flight")}
          >
            <Text style={{ color: "#000", fontSize: 22, textAlign: "center" }}>
              Book now
            </Text>
          </TouchableOpacity>
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
                navigation.navigate("Home");
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
  imageBackground: {
    marginTop: 120,
    width: windowWidth - 60,
    height: windowHeight / 2.5,
    borderRadius: 40,
    textAlign: "center",
    backgroundColor: "#f1f2f6",
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  image: {
    position: "absolute",
    bottom: 90,
    left: 18,
    width: windowWidth / 1.3,
    height: windowHeight / 2.5,
    borderRadius: 40,
  },
  location: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",

    alignItems: "center",
  },
  placeName: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: "10%",
  },
  introPlace: {
    marginTop: 30,
    width: windowWidth - 30,
    paddingHorizontal: 10,
  },
  about: {
    fontSize: 26,
    marginBottom: 20,
  },
  introText: {
    fontSize: 18,
  },
  btnBook: {
    width: 150,
    height: 40,

    justifyContent: "center",
    backgroundColor: "#f1f2f6",
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 10,

    marginVertical: 30,
  },
});
