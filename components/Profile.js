import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  TextInput,
} from "react-native";
import { navigations } from "../helper/function";

import firebase from "../firebase";
const Profile = () => {
  const [modalProfile, setModalProfile] = useState(false);
  const [modalEmail, setModalEmail] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({ name: "", photoUrl: "" });
  const navigation = navigations();
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.change}
          onPress={() => {
            setModalProfile(true);
          }}
        >
          <Text style={styles.text}>Change Username</Text>
        </TouchableOpacity>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalProfile}
            onRequestClose={() => {
              Alert.alert("Completed!");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>New Username</Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "90%",
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                  }}
                  onChangeText={(text) =>
                    setProfile({ ...profile, name: text })
                  }
                  value={profile.name}
                />

                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalProfile(!modalProfile);
                    const user = firebase.auth().currentUser;
                    user
                      .updateProfile({
                        displayName: profile.name,
                        photoURL: profile.photoUrl,
                      })
                      .then(() => {
                        Alert.alert("Updated profile");
                      })
                      .catch((error) => {
                        Alert.alert(error.message);
                      });
                    navigation.navigate("User");
                  }}
                >
                  <Text style={styles.textStyle}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <TouchableOpacity
          style={styles.change}
          onPress={() => {
            setModalPassword(true);
          }}
        >
          <Text style={styles.text}>Change Password</Text>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalPassword}
            onRequestClose={() => {
              Alert.alert("Completed!");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>New password</Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "90%",
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                  }}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />

                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalPassword(!modalPassword);
                    const user = firebase.auth().currentUser;

                    user
                      .updatePassword(password)
                      .then(() => {
                        Alert.alert("Updated password");
                      })
                      .catch((error) => {
                        Alert.alert(error.message);
                      });
                  }}
                >
                  <Text style={styles.textStyle}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <TouchableOpacity
          style={styles.change}
          onPress={() => setModalEmail(true)}
        >
          <Text style={styles.text}>Change Email</Text>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalEmail}
            onRequestClose={() => {
              Alert.alert("Completed!");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>New email</Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "90%",
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                  }}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />

                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalEmail(!modalEmail);
                    const user = firebase.auth().currentUser;
                    user
                      .updateEmail(email)
                      .then(() => {
                        Alert.alert("Updated email");
                      })
                      .catch((error) => {
                        Alert.alert(error.message);
                      });
                    navigation.navigate("User");
                  }}
                >
                  <Text style={styles.textStyle}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <TouchableOpacity
          style={styles.change}
          onPress={() => navigation.navigate("Picker")}
        >
          <Text style={styles.text}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  change: {
    flex: 1,
    width: 300,
    height: 100,
    backgroundColor: "#333",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f2f6",
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 10,

    marginVertical: 30,
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 100,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
