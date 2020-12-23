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
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <ScrollView>
      {route.params ? (
        <View style={styles.container}>
          <View style={{ marginTop: 20, marginRight: windowHeight / 2 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                style={styles.backArrow}
                name="left"
                size={28}
                color="#000"
              />
            </TouchableOpacity>
          </View>
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
                    5 <AntDesign name="star" color="#f1c40f" size={18} />
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
  },
  placeName: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 100,
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
});
