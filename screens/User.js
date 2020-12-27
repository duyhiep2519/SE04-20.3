import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import BackgroundCurve from "../helper/BackgroundCurve";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const User = () => {
  const isLogin = useSelector((state) => state.login);
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
              marginLeft: "10%",
            }}
          >
            {isLogin.username}
          </Text>
          <Text style={{ color: "#000", fontSize: 15 }}>
            Email :{isLogin.email}
          </Text>
        </View>

        <View>
          <Image
            style={styles.image}
            source={require("../assets/icons/profile.jpg")}
          ></Image>
        </View>
        <View style={styles.listMenu}>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuContent}>Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuContent}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuContent}>Account</Text>
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
