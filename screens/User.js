import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BackgroundCurve from "../helper/BackgroundCurve";
import { getCurrentUser, navigations } from "../helper/function";
import firebase from "../firebase";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const User = () => {
  const [user, setUser] = useState(firebase.auth().currentUser);

  //handle restart

  const handleRestart = () => {
    setUser(getCurrentUser());
  };

  const navigation = navigations();

  return (
    <ScrollView>
      <View style={styles.container}>
        <BackgroundCurve style={styles.svg} />
        <View style={styles.infoUser}>
          <Text
            style={{
              color: "#000",
              fontSize: 28,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            {user.displayName}
          </Text>
          <Text style={{ color: "#000", fontSize: 15 }}>
            Email :{user.email}
          </Text>
        </View>

        <View>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://th.bing.com/th/id/OIP.eIdhXYnjprkmU6wS-aYdSAHaH1?w=182&h=192&c=7&o=5&pid=1.7",
            }}
          ></Image>
        </View>
        <View style={styles.listMenu}>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuContent}>Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuContent}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.menu}
          >
            <Text style={styles.menuContent}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRestart} style={styles.menu}>
            <Text style={styles.menuContent}>Refesh</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default User;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    position: "absolute",
    width: windowWidth,
    top: 0,
    left: 0,
  },
  infoUser: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
  },
  image: {
    width: windowWidth / 2,
    height: windowWidth / 2,
    borderRadius: windowWidth / 2 - 100,
    marginTop: "50%",
  },
  listMenu: {
    marginTop: 50,
  },
  menu: {
    width: windowWidth - 30,
    height: 50,
    marginTop: 2,
  },
  menuContent: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
