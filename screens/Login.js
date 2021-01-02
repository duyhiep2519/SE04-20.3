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
  Image
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

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.buttonHeader}
            onPress={() => navigation.navigate("Login")}
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
        
          <Image
          source={require("../assets/icons/travel.png")}
          style={styles.image}>
          </Image>

        <View style={styles.login}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              
              placeholder="Password"
              value={pass}
              onChangeText={(text) => setPass(text)}
            />
          </View>

          <View>
            <Text style={styles.textQuestion}>Forgot password?</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
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
  image: {
    width: 250,
    height: 250,
    // opacity: 0.9,
    marginTop: 20,
    justifyContent: "center",
    overflow: 'hidden',
  },
  input: {
    backgroundColor: "#fff",
    width: "70%",
    padding: 10,
    borderRadius: 20,
    height: 60,
  },
  textHeader: {
    fontSize: 45, color: '#fff',
    top: '5%',
    fontWeight: 'bold',
    marginBottom:100
  },
  text: {
    minWidth: 100,
    padding: 10,
    textAlign: "left",
    color: "#fff",
    fontSize: 18,
  },
  login: {
    flex: 0.8,
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textQuestion: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 15,
    left: "35%",
    textDecorationLine: 'underline',
  },
  buttonHeader: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    borderRadius: 25,
    borderBottomWidth: 1.5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 230,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#0FEDFC",
    marginTop: 20
  },
});
