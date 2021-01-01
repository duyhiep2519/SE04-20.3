import firebase from "../firebase";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// isLogin
export const isLogin = () => useSelector((state) => state.login);
//useNavigation
export const navigations = () => useNavigation();
//useRouter
export const useRouter = () => useRoute();
// add ticket to firebase
export const addTicket = (ticket) => {
  const dbRef = firebase.database().ref().child("tickets");
  dbRef.push(ticket);
};

//get info current User
export const getCurrentUser = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return {
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoURl,
      uid: user.uid,
    };
  }
};
//updateProfile
const updateProfile = (username, photoUrl) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: username,
      photoURL: photoUrl,
    })
    .then(() => {
      Alert.alert("Updated profile");
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
};
//update email
const updateEmail = (email) => {
  const user = firebase.auth().currentUser;
  user
    .updateEmail(email)
    .then(() => {
      Alert.alert("Updated email");
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
};
//pass
const updatePassword = (password) => {
  const user = firebase.auth().currentUser;
  console.log(user);
  user
    .updatePassword(password)
    .then(() => {
      Alert.alert("Updated password");
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
};
export default {
  addTicket,
  getCurrentUser,
  isLogin,
  navigations,
  useRouter,
  updateProfile,
  updateEmail,
  updatePassword,
};
