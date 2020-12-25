import { AntDesign } from "@expo/vector-icons";
import {
  DrawerActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const textColor = "#130f40";
const ViewPlaces = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>
          <AntDesign style={{ color: "#000", fontSize: 28 }} name="left" />
        </Text>
      </TouchableOpacity>

      <View style={styles.listPlaces}>
        {route.params ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={route.params.resSearch}
            renderItem={({ item }) => (
              <View style={styles.flatListTopPlaces}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.dispatch(
                      DrawerActions.jumpTo("Details", { place: item })
                    );
                  }}
                >
                  <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {item.place}
                    </Text>
                  </View>
                  <Image source={item.image[0]} style={styles.imageTopPlaces} />
                  <View style={styles.imageOverlay}></View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(
                    DrawerActions.jumpTo("Details", { place: item })
                  );
                }}
              >
                <Image source={item.image[0]} style={styles.imageTopPlaces} />

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
        )}
      </View>
    </View>
  );
};
export default ViewPlaces;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flex: 1,
    overflow: "hidden",
    marginTop: 10,
    paddingBottom: 25,
  },

  imageTopPlaces: {
    width: windowWidth - 40,
    height: windowHeight / 2,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
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
    bottom: 0,
    left: 25,
  },
  arrowBack: {
    marginTop: 60,
    marginRight: windowWidth / 1.2,
  },
});
