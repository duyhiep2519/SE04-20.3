import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import firebase from "../firebase";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageBackground = {
  uri:
    "https://www.freevector.com/uploads/vector/preview/12939/FreeVector-Travel-Background.jpg",
};

const Home = () => {
  const isLogin = useSelector((state) => state.login);
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      await firebase
        .database()
        .ref()
        .child("places")
        .on("value", (snapshot) => {
          setPlaces(snapshot.val());
        });
    };
    featchData();
  }, []);

  return (
    <ScrollView>
      <StatusBar hidden />
      <View style={{ backgroundColor: "#bdc3c7" }}>
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
              <Text style={styles.greet}>{isLogin.username}!</Text>

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
                  top: windowHeight / 19,
                  left: windowWidth - 60,
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
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "#000",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Top Places
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: "#000",
              fontWeight: "bold",
              marginRight: 10,
            }}
            onPress={() => {
              navigation.dispatch(
                DrawerActions.jumpTo("ViewPlaces", { resSearch: places })
              );
            }}
          >
            View All
          </Text>
        </View>
        <View style={{ overflow: "hidden" }}>
          <FlatList
            horizontal
            data={places.slice(0, 11)}
            snapToInterval={windowWidth / 2}
            decelerationRate="fast"
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
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="black"
                      />{" "}
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
    fontSize: 25,
    color: "#fff",
    marginTop: windowHeight / 9,
  },
  greet: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    position: "absolute",
    right: 0,
    top: 30,

    // fontFamily: "notoserif",
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
    marginLeft: 5,
    marginTop: windowHeight / 29,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  imageTopPlaces: {
    width: windowWidth / 2.3,
    height: windowHeight / 3,
    borderRadius: 15,
  },
  flatListTopPlaces: {
    paddingHorizontal: 10,
    width: windowWidth / 2,
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
});
