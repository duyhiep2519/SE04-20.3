import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import places from "../data/places";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imageBackground = {
  uri:
    "https://www.freevector.com/uploads/vector/preview/12939/FreeVector-Travel-Background.jpg",
};

//render topPlaces
const renderTopPlaces = (item) => {
  <View>
    <TouchableOpacity>
      <Image source={item.image} style={styles.imageTopPlaces} />
    </TouchableOpacity>
  </View>;
};
const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={imageBackground}
        style={{ width: "100%", height: windowHeight / 2.5 }}
        imageStyle={{ borderBottomRightRadius: 70 }}
      >
        <View style={styles.homeOverlay}>
          <View style={styles.homeSearch}>
            <Feather
              name="menu"
              size={29}
              color="white"
              style={{ position: "absolute", top: 30, left: 20 }}
            />
            <Feather
              name="bell"
              size={29}
              color="white"
              style={{ position: "absolute", top: 38, left: windowWidth - 60 }}
            />
            <Text style={styles.greet}>Welcome!</Text>
            <Text style={styles.text}>Where would you like to go?</Text>
          </View>
          <View style={styles.searchContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#fff"
            ></TextInput>
            <Feather
              name="search"
              size={26}
              color="white"
              style={{ position: "absolute", top: 60, left: windowWidth - 50 }}
            />
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 30, color: "#000", fontWeight: "bold" }}>
            Top
          </Text>
        </View>
        <View>
          <FlatList
            horizontal
            data={places.slice(0, 11)}
            renderItem={({ item }) => (
              <View style={styles.flatListTopPlaces}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(item);

                    navigation.navigate("Details", { place: item });
                  }}
                >
                  <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.place}
                    </Text>
                  </View>
                  <Image source={item.image} style={styles.imageTopPlaces} />
                  <View style={styles.imageOverlay}></View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.viewPlaces}>
          <Text style={{ color: "#000", fontSize: 22 }}> View All</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  greet: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  homeOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: windowHeight / 2.5,
    backgroundColor: "#000",
    opacity: 0.4,
    borderBottomRightRadius: 70,
  },
  homeSearch: {
    paddingTop: 100,
    paddingLeft: 18,
  },
  searchInput: {
    backgroundColor: "#fff",
    width: "95%",
    padding: 10,
    marginLeft: 10,
    marginTop: 50,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  imageTopPlaces: {
    width: windowWidth / 2.3,
    height: windowHeight / 3,
    borderRadius: 15,
  },
  flatListTopPlaces: {
    paddingHorizontal: 15,
  },
  imageOverlay: {
    position: "absolute",
    top: 42,
    backgroundColor: "#000",
    width: windowWidth / 2.3,
    height: windowHeight / 3,
    borderRadius: 15,
    opacity: 0.3,
  },
  viewPlaces: {
    marginTop: 30,
  },
});
