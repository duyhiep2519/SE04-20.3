import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import firebase from "../firebase";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Result", result);

    if (!result.cancelled) {
      setImage(result.uri);
      setFile(result);
    }
  };
  //handle upload
  const handleUpload = () => {
    const user = firebase.auth().currentUser;
    const storageRef = firebase.storage().ref("avatar/" + user.displayName);
    storageRef.put(file);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity onpress={handleUpload}>
        <Text style={{ color: "#000" }}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
}