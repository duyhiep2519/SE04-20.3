import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";

import firebase from "../firebase";

import BackgroundCurve from "../helper/BackgroundCurve";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Flight = () => {
  const isLogin = useSelector((state) => state.login);
  const [provinces, setProvinces] = useState([]);
  const [flightSchedules, setFlightSchedules] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const featchData = async () => {
      await firebase
        .database()
        .ref()
        .child("flights/provinces")
        .on("value", (snapshot) => {
          setProvinces(snapshot.val());
        });
    };
    featchData();
  }, []);
  useEffect(() => {
    const featchData = async () => {
      await firebase
        .database()
        .ref()
        .child("flight_Schedules/flight_Schedules")
        .on("value", (snapshot) => {
          setFlightSchedules(snapshot.val());
        });
    };
    featchData();
  }, []);

  return (
    <ScrollView>
      <StatusBar hidden />
      <View style={styles.container}>
        <BackgroundCurve style={styles.svg} />
        <View style={styles.title}>
          <Text
            style={{
              paddingTop: 15,
              fontSize: 35,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            <AntDesign name="find" color="#fff" size={28} /> Find flight{" "}
            <AntDesign name="find" color="#fff" size={28} />
          </Text>
        </View>
        <View style={styles.Picker}>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "#ecf0f1",
              borderWidth: 1,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 9,
              },
              shadowOpacity: 0.5,
              shadowRadius: 12.35,

              elevation: 19,
            }}
          >
            <View style={styles.PickerForm}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#34495e",
                  fontWeight: "bold",
                }}
              >
                From <AntDesign name="enviroment" size={24} color="black" />
              </Text>
              <Picker
                style={{ height: 50, width: 300 }}
                selectedValue={selectedValue1}
                onValueChange={(itemValue) => setSelectedValue1(itemValue)}
              >
                <Picker.Item label="From..." value=""></Picker.Item>
                {provinces.map((item) => (
                  <Picker.Item
                    label={item.place}
                    value={item.name}
                    key={item.id}
                  />
                ))}
              </Picker>
            </View>
            <View style={styles.PickerForm}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#34495e",
                  fontWeight: "bold",
                }}
              >
                To <AntDesign name="enviroment" size={24} color="black" />
              </Text>
              <Picker
                style={{ width: 300, height: 50 }}
                selectedValue={selectedValue2}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue2(itemValue)
                }
              >
                <Picker.Item label="To..." value=""></Picker.Item>
                {provinces.map((item) => (
                  <Picker.Item
                    label={item.place}
                    value={item.name}
                    key={item.id}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.PickerResult}>
              <Text style={styles.PickerResultItem}>{selectedValue1}</Text>
              {selectedValue2 ? (
                <Text style={styles.PickerResultItem}>
                  <AntDesign name="swap" size={20} />
                </Text>
              ) : null}
              <Text style={styles.PickerResultItem}>{selectedValue2}</Text>
            </View>
            <TouchableOpacity
              style={styles.Find}
              onPress={() =>
                setData(
                  flightSchedules.filter(
                    (item) =>
                      item.from === selectedValue1 && item.to === selectedValue2
                  )
                )
              }
            >
              <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
                Find
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {data && (
          <View style={styles.ListFlight}>
            <Text
              style={{
                fontSize: 30,
                color: "#000",
                marginLeft: windowWidth / 18,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              Result <AntDesign name="tagso" size={30} />
            </Text>
            <FlatList
              data={data}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              renderItem={({ item }) => (
                <View style={styles.ListFlightItem}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        color: "#000",
                        marginLeft: windowWidth / 7,
                      }}
                    >
                      Flight infomation{" "}
                      <AntDesign name="checkcircleo" size={24} />
                    </Text>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 22,
                        fontWeight: "bold",
                      }}
                    >
                      <AntDesign name="barcode" size={22} color="black" />{" "}
                      Flight code : {item.id_flight}
                    </Text>
                    <Text style={{ fontSize: 14, color: "#000" }}>
                      {item.from} <AntDesign name="arrowright" /> {item.to}
                    </Text>

                    <Text style={{ fontSize: 22, color: "#000" }}>
                      <AntDesign name="calendar" size={22} /> {item.date}
                      {"   "}
                      {item.time}
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.centeredView}>
                    <Modal
                      animationType="none"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <View
                            style={{
                              paddingHorizontal: 15,
                            }}
                          >
                            <Text
                              style={{
                                color: "#000",
                                fontSize: 25,
                                fontWeight: "bold",
                                marginLeft: 20,
                              }}
                            >
                              <AntDesign name="infocirlceo" size={23} /> Name :
                              {isLogin.username}
                            </Text>
                            <Text
                              style={{
                                color: "#000",
                                fontSize: 22,
                                fontWeight: "bold",
                                textDecorationLine: "underline",
                              }}
                            >
                              <AntDesign
                                name="barcode"
                                size={22}
                                color="black"
                              />{" "}
                              Flight code : {item.id_flight} {"  "} GATE : 2
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                              {item.from} <AntDesign name="arrowright" />{" "}
                              {item.to}
                            </Text>

                            <Text style={{ fontSize: 22, color: "#000" }}>
                              <AntDesign name="calendar" size={22} />{" "}
                              {item.date}
                              {"   "}
                              {item.time}
                            </Text>
                          </View>

                          <TouchableOpacity
                            style={{
                              ...styles.openButton,
                              backgroundColor: "#2196F3",
                            }}
                            onPress={() => {
                              setModalVisible(!modalVisible);
                            }}
                          >
                            <Text style={styles.textStyle}>
                              Book <AntDesign name="book" />
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id_flight}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default Flight;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    borderRadius: 10,
  },
  ListFlight: {
    flex: 1,
    justifyContent: "space-around",
  },
  ListFlightItem: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-around",
    padding: 16,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  Find: {
    flex: 1,
    width: 150,
    height: 40,
    backgroundColor: "#FB7200",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: windowWidth / 3.5,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    alignItems: "center",
    marginTop: 40,
  },
  Picker: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 150,
  },
  PickerForm: {
    flex: 1,
    alignItems: "center",
  },
  PickerResult: {
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    marginTop: 20,
    borderRadius: 15,
  },
  PickerResultItem: {
    fontSize: 18,
    color: "#000",
  },
  text: {
    fontSize: 20,
    color: "#000",
    marginLeft: windowWidth / 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 5,
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
    borderRadius: 10,
    padding: 15,
    width: 150,
    marginBottom: 5,

    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  svg: {
    position: "absolute",
    width: Dimensions.get("window").width,
    top: 0,
  },
});
