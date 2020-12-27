import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import firebase from "../firebase";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  //handle SignUp
  const signUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.updateProfile({
            displayName: name,
          });
          navigation.navigate("Login");
        } else {
          console.log("Loi");
        }
      });
    } catch (error) {
      console.log(error.message);
      Alert.alert(error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={{ width: "100%", height: windowHeight }}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ecf0f1"
        translucent={true}
      />
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}></View>
        <View style={styles.login}>
          <View style={styles.loginContent}>
            <Text style={styles.text}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={name}
              onChangeText={(text) => setName(text)}
              textContentType="emailAddress"
            />
          </View>
          <View style={styles.loginContent}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
            />
          </View>
          <View style={styles.loginContent}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={pass}
              onChangeText={(text) => setPass(text)}
              textContentType="password"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={{ color: "#fff" }}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.textQuestion}>Do you have an account yet?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#fff" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "#fff",
    width: "70%",
    padding: 10,
    borderRadius: 20,
    height: 60,
  },
  text: {
    minWidth: 100,
    padding: 10,
    textAlign: "left",
    color: "#fff",
    fontSize: 18,
  },
  login: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 100,
  },
  loginContent: {
    flex: 1,
    flexDirection: "row",
  },

  textQuestion: {
    fontSize: 18,
    color: "#fff",
    paddingVertical: 10,
    marginBottom: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 230,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ff9ff3",
    marginBottom: 15,
  },
});
