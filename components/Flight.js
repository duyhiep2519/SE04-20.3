import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import BackgroundCurve from "../helper/BackgroundCurve";
import { addTicket, navigations } from "../helper/function";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Flight = () => {
  const isLogin = useSelector((state) => state.login);
  const navigation = navigations();
  const [provinces, setProvinces] = useState([]);
  const [flightSchedules, setFlightSchedules] = useState([]);

  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    class: "",
    traveler: "",
    time: "",
    date: "",
    id_flight: "",
    price: "",
  });

  const [data, setData] = useState();

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
        .child("flight_Schedules/flightSchedules")
        .on("value", (snapshot) => {
          setFlightSchedules(snapshot.val());
        });
    };
    featchData();
  }, []);

  return (
    <ScrollView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ecf0f1"
        translucent={true}
      />
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>
          <AntDesign style={{ color: "#000", fontSize: 28 }} name="left" />
        </Text>
      </TouchableOpacity>
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

        {Platform.OS === "ios" ? (
          <View>
            <View style={styles.PickerIos}>
              <View style={{ ...styles.PickerFormIos }}>
                <Picker
                  style={{ height: 30, width: 150 }}
                  selectedValue={ticket.from}
                  onValueChange={(itemValue) =>
                    setTicket({ ...ticket, from: itemValue })
                  }
                >
                  <Picker.Item label="From" value=""></Picker.Item>
                  {provinces.map((item) => (
                    <Picker.Item
                      label={item.place}
                      value={item.name}
                      key={item.id}
                    />
                  ))}
                </Picker>
              </View>

              <View style={styles.PickerFormIos}>
                <Picker
                  style={{ width: 150, height: 50 }}
                  selectedValue={ticket.to}
                  onValueChange={(itemValue, itemIndex) =>
                    setTicket({ ...ticket, to: itemValue })
                  }
                >
                  <Picker.Item label="To" value=""></Picker.Item>
                  {provinces.map((item) => (
                    <Picker.Item
                      label={item.place}
                      value={item.name}
                      key={item.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.PickerResultIos}>
              <Text style={styles.PickerResultItem}>{ticket.from}</Text>
              {ticket.to ? (
                <Text style={styles.PickerResultItem}>
                  <AntDesign name="swap" size={20} />
                </Text>
              ) : null}
              <Text style={styles.PickerResultItem}>{ticket.to}</Text>
            </View>

            <View style={styles.classIos}>
              <Picker
                style={{ width: 140, height: 50 }}
                selectedValue={ticket.traveler}
                onValueChange={(itemValue, itemIndex) =>
                  setTicket({ ...ticket, traveler: itemValue })
                }
              >
                <Picker.Item label="Traveler" value=""></Picker.Item>
                <Picker.Item label="1 traveler" value={1}></Picker.Item>
                <Picker.Item label="2 traveler" value={2}></Picker.Item>
                <Picker.Item label="3 traveler" value={3}></Picker.Item>
              </Picker>
              <Picker
                style={{ width: 140, height: 50 }}
                selectedValue={ticket.class}
                onValueChange={(itemValue, itemIndex) =>
                  setTicket({ ...ticket, class: itemValue })
                }
              >
                <Picker.Item label="Class" value=""></Picker.Item>
                <Picker.Item label="Economy" value="Economy"></Picker.Item>
                <Picker.Item label="Business" value="Business"></Picker.Item>
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.FindIos}
              onPress={() => {
                setData(
                  flightSchedules.filter(
                    (item) => item.from === ticket.from && item.to === ticket.to
                  )
                );
              }}
            >
              <Text>
                <FontAwesome name="paper-plane" color="#fff" size={22} />
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={styles.PickerForm}>
                  <Picker
                    style={{ height: 50, width: 150 }}
                    selectedValue={ticket.from}
                    onValueChange={(itemValue) =>
                      setTicket({ ...ticket, from: itemValue })
                    }
                  >
                    <Picker.Item label="From" value=""></Picker.Item>
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
                  <Picker
                    style={{ width: 150, height: 50 }}
                    selectedValue={ticket.to}
                    onValueChange={(itemValue, itemIndex) =>
                      setTicket({ ...ticket, to: itemValue })
                    }
                  >
                    <Picker.Item label="To" value=""></Picker.Item>
                    {provinces.map((item) => (
                      <Picker.Item
                        label={item.place}
                        value={item.name}
                        key={item.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.PickerResult}>
                <Text style={styles.PickerResultItem}>{ticket.from}</Text>
                {ticket.to ? (
                  <Text style={styles.PickerResultItem}>
                    <AntDesign name="swap" size={20} />
                  </Text>
                ) : null}
                <Text style={styles.PickerResultItem}>{ticket.to}</Text>
              </View>

              <View style={styles.class}>
                <Picker
                  style={{ width: 140, height: 50 }}
                  selectedValue={ticket.traveler}
                  onValueChange={(itemValue, itemIndex) =>
                    setTicket({ ...ticket, traveler: itemValue })
                  }
                >
                  <Picker.Item label="Traveler" value=""></Picker.Item>
                  <Picker.Item label="1 traveler" value={1}></Picker.Item>
                  <Picker.Item label="2 traveler" value={2}></Picker.Item>
                  <Picker.Item label="3 traveler" value={3}></Picker.Item>
                </Picker>
                <Picker
                  style={{ width: 140, height: 50 }}
                  selectedValue={ticket.class}
                  onValueChange={(itemValue, itemIndex) =>
                    setTicket({ ...ticket, class: itemValue })
                  }
                >
                  <Picker.Item label="Class" value=""></Picker.Item>
                  <Picker.Item label="Economy" value="Economy"></Picker.Item>
                  <Picker.Item label="Business" value="Business"></Picker.Item>
                </Picker>
              </View>
              <TouchableOpacity
                style={styles.Find}
                onPress={() => {
                  setData(
                    flightSchedules.filter(
                      (item) =>
                        item.from === ticket.from && item.to === ticket.to
                    )
                  );
                }}
              >
                <Text>
                  <FontAwesome name="paper-plane" color="#fff" size={22} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

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
            {data.map((item) => (
              <View style={styles.ticket} key={item.id_flight}>
                <View style={styles.ticketInfo}>
                  <Text style={{ color: "#000", fontSize: 25 }}>
                    ${item.price}
                  </Text>
                  <Text style={{ color: "#000", fontSize: 20 }}>
                    4.5
                    <AntDesign name="star" color="#f1c40f" size={20} />{" "}
                  </Text>
                  <TouchableOpacity style={styles.btnBook}>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 20,
                        textAlign: "center",
                      }}
                      onPress={() => {
                        addTicket({
                          ...ticket,
                          date: item.date,
                          time: item.time,
                          id_flight: item.id_flight,
                          price: item.price,
                          name: isLogin.username,
                          email: isLogin.email,
                        });
                        Alert.alert(
                          "You booked a new ticket,see it in Ticket!"
                        );
                      }}
                    >
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.ticketInfo}>
                  <Text style={styles.ticketItem}>
                    <AntDesign name="calendar" color="#000" size={18} />{" "}
                    {item.date} - {item.time}{" "}
                  </Text>
                  <Text style={styles.ticketItem}>
                    <Ionicons name="ios-airplane" color="#000" size={18} />{" "}
                    {item.id_flight}
                  </Text>
                  <Text style={styles.ticketItem}>{item.from}</Text>
                </View>
                <View style={styles.ticketInfo}>
                  <Text style={styles.ticketItem}>
                    <AntDesign name="addusergroup" color="#000" size={18} />{" "}
                    {ticket.traveler}
                  </Text>
                  <Text style={styles.ticketItem}>
                    <Entypo name="bookmark" color="#000" size={18} />{" "}
                    {ticket.class}
                  </Text>
                </View>
              </View>
            ))}
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ecf0f1",

    borderRadius: 15,
  },
  PickerResultItem: {
    fontSize: 13,
    color: "#000",
  },

  svg: {
    position: "absolute",
    width: Dimensions.get("window").width,
    top: 0,
  },
  class: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ticket: {
    borderWidth: 1,
    margin: 10,
    backgroundColor: "#e67e22",
    borderRadius: 10,
  },
  ticketInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  ticketItem: {
    fontSize: 13,
  },
  btnBook: {
    width: 80,
    height: 30,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    backgroundColor: "#f1f2f6",
    shadowColor: "blue",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    // add shadows for Android only
    // No options for shadow color, shadow offset, shadow opacity like iOS
    elevation: 10,
  },
  PickerIos: {
    flexDirection: "row",

    marginTop: windowHeight / 3,
  },
  PickerFormIos: {
    flex: 1,
    marginHorizontal: 15,
  },
  PickerResultIos: {
    flexDirection: "row",
    marginTop: windowHeight / 3.5,
    alignItems: "center",
    justifyContent: "center",
  },
  classIos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  FindIos: {
    width: 150,
    height: 40,
    backgroundColor: "#FB7200",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: windowWidth / 3.5,
    marginTop: "50%",
  },
  arrowBack: {
    marginVertical: "8%",
    marginRight: windowWidth / 1.1,
  },
});
