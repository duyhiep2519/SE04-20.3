import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import places from "../data/places";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowHeight);
const imageBackground = {
  uri:
    "https://www.freevector.com/uploads/vector/preview/12939/FreeVector-Travel-Background.jpg",
};

const Home = () => {
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState();

  return (
    <ScrollView>
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
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                }}
              />
              <Feather
                name="bell"
                size={29}
                color="white"
                style={{
                  position: "absolute",
                  top: 38,
                  left: windowWidth - 60,
                }}
              />
              <Text style={styles.greet}>Welcome!</Text>
              <Text style={styles.text}>Where would you like to go?</Text>
            </View>
            <View style={styles.searchContent}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#fff"
                value={searchInput}
                onChangeText={(text) => setSearchInput(text)}
              ></TextInput>
              <AntDesign
                name="search1"
                size={26}
                color="white"
                style={{
                  position: "absolute",
                  top: 60,
                  left: windowWidth - 50,
                }}
                onPress={() => {
                  if (searchInput) {
                    const res = places.filter(
                      (item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchInput.toLowerCase()) ||
                        item.place
                          .toLowerCase()
                          .includes(searchInput.toLowerCase())
                    );

                    navigation.dispatch(
                      DrawerActions.jumpTo("ViewPlaces", { resSearch: res })
                    );
                    setSearchInput("");
                  }
                }}
              />
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 30, color: "#000", fontWeight: "bold" }}>
            Top
          </Text>
          <Text
            style={{ fontSize: 25, color: "#000", fontWeight: "bold" }}
            onPress={() => {
              navigation.dispatch(
                DrawerActions.jumpTo("ViewPlaces", { resSearch: places })
              );
            }}
          >
            View All
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
                    navigation.dispatch(
                      DrawerActions.jumpTo("Details", { place: item })
                    );
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
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.travel}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}> Services </Text>

          <View style={styles.services}>
            <Text
              onPress={() =>
                navigation.dispatch(DrawerActions.jumpTo("Flight"))
              }
              style={styles.textServices}
            >
              <MaterialIcons name="flight" size={26} color="black" />
              Flight
            </Text>
            <Text
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Train"))}
              style={styles.textServices}
            >
              <MaterialIcons name="train" size={24} color="black" />
              Train
            </Text>
            <Text
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Boat"))}
              style={styles.textServices}
            >
              <MaterialIcons name="directions-boat" size={24} color="black" />
              Boat
            </Text>
            <Text
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Bus"))}
              style={styles.textServices}
            >
              <MaterialIcons name="directions-bus" size={24} color="black" />
              Bus
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
  travel: {
    marginTop: windowHeight / 19,
    paddingBottom: 40,
  },
  services: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textServices: {
    fontSize: 22,
    marginTop: windowHeight / 18,
  },
});
