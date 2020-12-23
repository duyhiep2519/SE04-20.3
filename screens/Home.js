import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
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
const textColor = "#130f40";
const unPressable = "#b2bec3";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
  const isLogin = useSelector((state) => state.login);
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState();
  const [places, setPlaces] = useState([]);
  const [viewPlaces, setViewPlaces] = useState([]);

  const [toogle, setToogle] = useState({
    new: unPressable,
    most: unPressable,
    hot: unPressable,
    all: unPressable,
  });

  useEffect(() => {
    const featchData = async () => {
      await firebase
        .database()
        .ref()
        .child("places/places")
        .on("value", (snapshot) => {
          setPlaces(snapshot.val());
        });
    };
    featchData();
    setViewPlaces(places.slice(3, 10));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.user}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <AntDesign name="appstore1" size={38} color={textColor} />
          </TouchableOpacity>
          <View style={{ marginLeft: windowWidth / 4 }}>
            <Text style={styles.greet}>
              {isLogin.username}{" "}
              <FontAwesome
                name="user-circle-o"
                size={30}
                color="#000"
              ></FontAwesome>
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 40,
              color: "#130f40",
              fontWeight: "bold",
              marginLeft: 10,
              marginTop: 40,
            }}
          >
            Discover
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: "#130f40",
              fontWeight: "bold",
            }}
          >
            {" "}
            world with us!
          </Text>
          <Text style={{ color: textColor, paddingLeft: 10, fontSize: 18 }}>
            Live life with no excuses, travel with no regret
          </Text>
        </View>
        <View style={styles.searchContent}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search something..."
            placeholderTextColor={textColor}
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
          ></TextInput>
          <View style={styles.searchButton}>
            <Text>
              <AntDesign
                name="search1"
                size={28}
                color="#fff"
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
            </Text>
          </View>
        </View>
        <View style={styles.menuTravel}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.jumpTo("Flight"))}
            style={styles.menuTravelIItem}
          >
            <Text>
              <MaterialIcons
                name="airplanemode-active"
                size={38}
                color="#fff"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTravelIItem}>
            <Text>
              <MaterialIcons name="train" size={38} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTravelIItem}>
            <Text>
              <MaterialIcons name="photo-camera" size={38} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTravelIItem}>
            <Text>
              <FontAwesome name="building" size={38} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatList}>
          <View style={styles.menuList}>
            <TouchableOpacity
              onPress={() => {
                setViewPlaces(places.slice(0, 11));
                setToogle({
                  new: textColor,
                  most: unPressable,
                  hot: unPressable,
                  all: unPressable,
                });
              }}
              style={styles.menuListItem}
            >
              <Text style={{ color: toogle.new, fontSize: 18 }}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setViewPlaces(places.slice(13, 22));
                setToogle({
                  new: unPressable,
                  most: textColor,
                  hot: unPressable,
                  all: unPressable,
                });
              }}
              style={styles.menuListItem}
            >
              <Text style={{ color: toogle.most, fontSize: 18 }}>
                Most viewed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setViewPlaces(places.slice(22, 30));
                setToogle({
                  new: unPressable,
                  most: unPressable,
                  hot: textColor,
                  all: unPressable,
                });
              }}
              style={styles.menuListItem}
            >
              <Text style={{ color: toogle.hot, fontSize: 18 }}>Hot tours</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  DrawerActions.jumpTo("ViewPlaces", { resSearch: places })
                )
              }
              style={styles.menuListItem}
            >
              <Text style={{ color: toogle.all, fontSize: 18 }}>All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={viewPlaces}
            decelerationRate="fast"
            snapToInterval={windowWidth - 60}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(
                    DrawerActions.jumpTo("Details", { place: item })
                  );
                }}
              >
                <Image source={item.image[0]} style={styles.imageTopPlaces} />
                <View style={styles.imageOverlay}></View>
                <View style={styles.description}>
                  <Text
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    <AntDesign name="flag" color="#fff" size={22} />{" "}
                    {item.place}
                  </Text>

                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    <MaterialIcons name="location-on" size={18} color="#fff" />{" "}
                    Việt Nam
                  </Text>
                </View>
                <View style={styles.star}>
                  <AntDesign name="star" color="#f1c40f" size={18} />
                  <AntDesign name="star" color="#f1c40f" size={18} />
                  <AntDesign name="star" color="#f1c40f" size={18} />
                  <AntDesign name="star" color="#f1c40f" size={18} />
                  <AntDesign name="star" color="#f1c40f" size={18} />
                </View>
              </TouchableOpacity>
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
    backgroundColor: "#fff",
  },
  user: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  greet: {
    color: textColor,
    fontSize: 26,
  },

  searchContent: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
  },

  searchInput: {
    backgroundColor: "#dcdde1",
    width: windowWidth - 40,
    height: 60,
    borderRadius: 20,
    textAlign: "center",
  },
  searchButton: {
    position: "absolute",
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#ff9ff3",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuTravel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  menuTravelIItem: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#ff9ff3",
    alignItems: "center",
    justifyContent: "center",
  },
  menuList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuListItem: {
    padding: 20,
  },
  flatList: {
    flex: 1,
    overflow: "hidden",
    marginTop: 10,
    paddingBottom: 25,
  },

  imageTopPlaces: {
    width: windowWidth / 1.3,
    height: windowHeight / 1.7,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 20,
  },
  imageOverlay: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    height: windowHeight / 1.7,
    width: windowWidth / 1.3,
    backgroundColor: "#000",
    opacity: 0.4,
    borderRadius: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  description: {
    color: textColor,
    position: "absolute",
    bottom: 40,
    left: 20,
  },

  star: {
    position: "absolute",
    flexDirection: "row",

    bottom: 10,
    left: 25,
  },
});
