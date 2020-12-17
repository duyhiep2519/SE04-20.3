import React, { useState } from "react";
import firebase from "../firebase";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageBackground = {
  uri:
    "https://www.freevector.com/uploads/vector/preview/12939/FreeVector-Travel-Background.jpg",
};

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
      source={imageBackground}
      style={{ width: "100%", height: windowHeight }}
    >
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
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
          <View style={styles.button}>
            <TouchableOpacity onPress={signUp}>
              <Text style={styles.textLogin}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.textQuestion}>Do you have an account yet?</Text>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Login"))}
            >
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    width: "60%",
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  text: {
    minWidth: 100,
    padding: 10,
    textAlign: "left",
    color: "#fff",
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
  textLogin: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 150,
    backgroundColor: "#3498db",
    width: 100,
    height: 30,
    textAlign: "center",
  },
  buttonSignUp: {
    textAlign: "center",
    width: 100,
  },
  textQuestion: {
    fontSize: 18,
    color: "#000",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    flex: 4,
    marginRight: 100,
  },
});
