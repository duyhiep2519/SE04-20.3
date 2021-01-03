import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import firebase from "../firebase";
import BackgroundCurve from "../helper/BackgroundCurve";
import { getCurrentUser, navigations } from "../helper/function";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const User = () => {
  const [user, setUser] = useState(firebase.auth().currentUser);
  const [imageRef, setImageRef] = useState(user.displayName);
  const [profileImg, setProfileImg] = useState(null);
  useEffect(() => {
    const storageRef = firebase.storage().ref("images").child(imageRef);
    storageRef
      .getDownloadURL()
      .then((downloadURL) => setProfileImg(downloadURL))
      .catch((error) => {
        console.log(error.message);
        Alert.alert("Please update your avatar!");
      });
  });

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
              uri: profileImg,
            }}
          ></Image>
        </View>
        <View style={styles.listMenu}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.navigate("Tickets")}
          >
            <Text style={styles.menuContent}>Ticket</Text>
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
    width: 150,
    height: 50,

    backgroundColor: "#f1f2f6",
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 10,

    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContent: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
