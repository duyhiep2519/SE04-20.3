import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import firebase from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../store/actions/actions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imageBackground = {
  uri:
    "https://www.freevector.com/uploads/vector/preview/12939/FreeVector-Travel-Background.jpg",
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const isLogin = useSelector((state) => state.login);
  const dispatch = useDispatch();
  //handle Login
  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(signIn(email, pass));
          console.log(user);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ImageBackground
      source={imageBackground}
      style={{ width: "100%", height: windowHeight }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.login}>
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
          <View style={styles.loginContent}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
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
    height: 300,
    textAlign: "center",
    marginTop: 100,
  },
  loginContent: {
    flex: 1,
    flexDirection: "row",
  },
  textLogin: {
    fontSize: 22,
    color: "blue",
    marginLeft: 150,
    backgroundColor: "#fff",
    width: 100,
    height: 30,
    textAlign: "center",
  },
});
