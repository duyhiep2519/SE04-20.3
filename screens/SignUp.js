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
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.buttonHeader}
            onPress={() => navigation.navigate("Login")
            }
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonHeader}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.login}>
          <View>
            <Text style={styles.text}>FULL NAME</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor={'#D1D0D0'}
              value={name}
              fontSize={15}
              onChangeText={(text) => setName(text)}
              textContentType="emailAddress"
            />
          </View>
          <View>
            <Text style={styles.text}>E-MAIL</Text>
            <TextInput
              style={styles.input}
              placeholder="Your e-mail goes here"
              value={email}
              fontSize={15}
              placeholderTextColor={'#D1D0D0'}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
            />
          </View>
          <View>
            <Text style={styles.text}>PASSWORD</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'#D1D0D0'}
              value={pass}
              fontSize={15}
              onChangeText={(text) => setPass(text)}
              textContentType="password"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Create Account</Text>
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
    width: 400,
    paddingLeft: 12,
    borderRadius: 20,
    height: 60,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  text: {
    minWidth: 100,
    paddingLeft: 12,
    textAlign: "left",
    color: "#fff",
    fontSize: 20,
  },
  login: {
    flex: 0.8,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 230,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#0FEDFC",
    marginBottom: 15,
    marginTop: 20
  },
  buttonHeader: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    borderRadius: 25,
    borderBottomWidth: 1.5,
    top: '-5%'
  },
});
