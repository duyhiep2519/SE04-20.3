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
import { useDispatch } from "react-redux";
import firebase from "../firebase";
import { signIn } from "../store/actions/actions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigation = useNavigation();

  const dispatch = useDispatch();

  //handle Login
  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(signIn(user.displayName, email, pass));
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
        <View style={styles.login}>
          <View style={styles.loginContent}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.loginContent}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={pass}
              onChangeText={(text) => setPass(text)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={{ color: "#fff" }}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.textQuestion}>Do you have an account yet?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={{ color: "#fff" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;
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
