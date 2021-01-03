import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import { navigations } from "../helper/function";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tickets = () => {
  const isLogin = useSelector((state) => state.login);
  const [tickets, setTickets] = useState([]);
  const navigation = navigations();
  useEffect(() => {
    const featchData = async () => {
      await firebase
        .database()
        .ref()
        .child("tickets")
        .on("value", (snapshot) => {
          setTickets(Object.values(snapshot.val()));
        });
    };
    featchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ecf0f1"
        translucent={true}
      />
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>
          <AntDesign style={{ color: "#000", fontSize: 28 }} name="left" />
        </Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://5.imimg.com/data5/EN/ZD/XB/SELLER-6189449/flight-booking-service-500x500.jpg",
        }}
        style={styles.image}
      ></ImageBackground>

      <FlatList
        data={tickets.filter((item) => item.email === isLogin.email)}
        renderItem={({ item }) => (
          <View style={styles.viewList}>
            <View style={{ top: -10 }}>
              <Text style={{ fontWeight: "bold" }}>{item.nowDateTime}</Text>
            </View>

            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "red",
                  bottom: "75%",
                  textAlign: "center",
                }}
              >
                {item.class} Class
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",

                marginRight: "35%",
                marginBottom: "10%",
              }}
            >
              <View
                style={{
                  marginRight: 20,
                  borderRightWidth: 1,
                  borderRightColor: "#9F9C9C",
                  width: "85%",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text
                      style={{
                        marginBottom: 30,
                        transform: [
                          { rotateX: "-15deg" },
                          { rotateZ: "-15deg" },
                        ],
                      }}
                    >
                      <MaterialIcons
                        name="flight-takeoff"
                        size={40}
                        color="black"
                        marginBottom={50}
                      />
                    </Text>
                    <Text
                      style={{
                        transform: [{ rotate: "90deg" }],
                      }}
                    >
                      <MaterialCommunityIcons
                        name="barcode"
                        size={60}
                        color="black"
                        top={10}
                      />
                    </Text>
                  </View>
                  <View style={{ marginLeft: "5%" }}>
                    <View>
                      <Text style={styles.textDefault}>Name of Passenger</Text>
                      <Text style={styles.textData}>{item.name}</Text>
                      <Text style={styles.textDefault}>From</Text>
                      <Text style={styles.textData}>{item.from}</Text>
                      <Text style={styles.textDefault}>To</Text>
                      <Text style={styles.textData}>{item.to}</Text>
                    </View>

                    <View>
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <Text style={styles.textDefault}>Flight</Text>
                          <Text style={styles.textData}>{item.id_flight}</Text>
                        </View>
                        <View>
                          <Text style={styles.textDefault}> Date</Text>
                          <Text style={styles.textData}>{item.date} </Text>
                        </View>
                        <View>
                          <Text style={styles.textDefault}>Time</Text>
                          <Text style={styles.textData}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginLeft: "25%" }}>
                    <View>
                      <Text style={styles.textDefault}>Name of Passenger</Text>
                      <Text style={styles.textData}>{item.name}</Text>
                      <Text style={styles.textDefault}>From</Text>
                      <Text style={styles.textData}>{item.from}</Text>
                      <Text style={styles.textDefault}>To</Text>
                      <Text style={styles.textData}>{item.to}</Text>
                    </View>

                    <View>
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <Text style={styles.textDefault}>Flight</Text>
                          <Text style={styles.textData}>{item.id_flight}</Text>
                        </View>
                        <View>
                          <Text style={styles.textDefault}> Date</Text>
                          <Text style={styles.textData}>{item.date} </Text>
                        </View>
                        <View>
                          <Text style={styles.textDefault}>Time</Text>
                          <Text style={styles.textData}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => "key" + index}
      />
    </View>
  );
};
export default Tickets;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0DFD0",
  },
  image: {
    width: 450,
    height: 300,
    backgroundColor: "blue",
    justifyContent: "center",
  },
  viewList: {
    width: "100%",
    height: windowWidth / 2 - 20,
    marginBottom: 30,
    backgroundColor: "#E5F2FF",
    borderTopColor: "#70B6FD",
    borderBottomColor: "#7EBEFF",

    borderRadius: 20,

    height: windowWidth / 2,
    marginTop: 10,
  },
  text: {
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  textData: {
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
  },
  textDefault: {
    textAlign: "left",
    color: "#BEB8B8",
    fontWeight: "bold",
    fontSize: 9,
  },
  textData1: {
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
    fontSize: 9,
    marginBottom: 3,
  },
  textDefault1: {
    textAlign: "left",
    color: "#BEB8B8",
    fontWeight: "bold",
    fontSize: 9,
    marginBottom: 3,
  },
  arrowBack: {
    marginTop: "10%",
    marginRight: windowWidth / 1.1,
  },
});
