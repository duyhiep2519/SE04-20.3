import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import firebase from "../firebase";
import { navigations } from "../helper/function";

const ImagePickerExample = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const navigation = navigations();

  //handle upload
  const handleUpload = () => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        photoURL: file.uri,
      })
      .then(() => {
        Alert.alert("Updated image");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
    navigation.navigate("User");
  };

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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity style={{ marginTop: 100 }} onPress={handleUpload}>
        <Text style={{ color: "#000", fontSize: 28 }}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ImagePickerExample;
