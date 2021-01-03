import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import firebase from "../firebase";
import { navigations } from "../helper/function";

const ImagePickerExample = () => {
  const [image, setImage] = useState(null);
  const [imageCamera, setImageCamera] = useState(null);

  const navigation = navigations();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setImageCamera(result.uri);
    }
  };
  const handleUpload = async () => {
    if (image) {
      const response = await fetch(image);
      const blob = await response.blob();

      const user = firebase.auth().currentUser;

      const storageRef = firebase.storage().ref("images/" + user.displayName);

      storageRef
        .put(blob)
        .then(() => {
          Alert.alert("Success!!!");
          navigation.navigate("User");
        })
        .catch((error) => {
          console.log(error.message);
          console.log("blob", blob);
        });
    }
    if (imageCamera) {
      const response = await fetch(imageCamera);
      const blob = await response.blob();

      const user = firebase.auth().currentUser;

      const storageRef = firebase.storage().ref("images/" + user.displayName);

      storageRef
        .put(blob)
        .then(() => {
          Alert.alert("Success!!");
          navigation.navigate("User");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.chooseOpacity} onPress={pickImage}>
        <Text style={styles.textChooser}>On device</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity style={styles.chooseOpacity} onPress={pickImageCamera}>
        <Text style={styles.textChooser}>Use Camera</Text>
      </TouchableOpacity>
      {imageCamera && (
        <Image
          source={{ uri: imageCamera }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <TouchableOpacity
        style={{ ...styles.chooseOpacity, backgroundColor: "#3498db" }}
        onPress={handleUpload}
      >
        <Text style={{ color: "#fff", fontSize: 28, fontWeight: "150" }}>
          Upload
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.chooseOpacity, backgroundColor: "#3498db" }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={{ color: "#fff", fontSize: 28, fontWeight: "150" }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ImagePickerExample;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chooseOpacity: {
    marginVertical: 20,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f2f6",
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 10,
  },
  textChooser: {
    color: "#000",
    fontWeight: "200",
    fontSize: 28,
  },
});
