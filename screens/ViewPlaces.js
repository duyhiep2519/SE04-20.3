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
import places from "../data/places";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
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
        <Text style={{ color: "#e84118", fontSize: 18 }}>
          <AntDesign
            style={{ color: "#e84118", fontSize: 18 }}
            name="arrowleft"
          />
          Back to Home
        </Text>
      </TouchableOpacity>

      <View style={styles.listPlaces}>
        {route.params ? (
          <FlatList
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
        ) : (
          <FlatList
            keyExtractor={(item) => item.id}
            data={places}
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
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        marginBottom: 20,
                      }}
                    >
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
  imageTopPlaces: {
    width: windowWidth - 20,
    height: windowHeight / 2.8,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  flatListTopPlaces: {
    paddingHorizontal: 15,
  },
  imageOverlay: {
    position: "absolute",
    top: windowHeight / 17.5,
    backgroundColor: "#000",
    width: windowWidth - 20,
    height: windowHeight / 2.8,
    borderRadius: 15,
    opacity: 0.3,
  },

  viewPlaces: {
    marginTop: 30,
  },

  listPlaces: {
    marginTop: 50,
  },
  arrowBack: {
    position: "absolute",
    top: 20,
    left: 10,
    height: 40,
  },
});
