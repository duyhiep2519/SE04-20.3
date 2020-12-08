import React, { useState, useEffect } from "react";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Dimensions, View, Text, StyleSheet, ScrollView, Modal, Picker, TouchableHighlight, ImageBackground, Button } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import provinces from "../data/flight"
import flight_Schedules from "../data/flight Schedules";
import firebase from "firebase";

const imageBackground = {
  uri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTKzZLtV2Ji5_NmjtxRKPzUCJWyAHid3VdA&usqp=CAU",
};
const Flight = () => {
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [flag, setFlag] = useState(false);
  const [dataFlight,setDataFlight] = useState({id:'0',time:'0',date:'0'})
  // console.log(dataFlight)
  const data = flight_Schedules.filter(
    item => 
    item.from === selectedValue1 && 
    item.to === selectedValue2
    )

  const test=(item)=>{
    setModalVisible(!modalVisible)
    setDataFlight({id:item.id_flight,time:item.time,date:item.date})
    console.log(item.id)

  }
  return (
    <ScrollView>
      <View style={styles.contener}>
        <View style={styles.header}>
          <Text style={{
            paddingTop: 15,
            fontSize: 35,
            fontWeight: "bold",
            color: "#0b0beb",
          }}>
            Find flight
          </Text>
        </View>
        <View styles={{ borderWidth: 4 }} >
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>From : </Text>
            <Picker
              styles={{
                fontWeight: 7,
                weight: 19,
                height: 1
              }}
              selectedValue={selectedValue1}
              onValueChange={(itemValue) => setSelectedValue1(itemValue)}>
              <Picker.Item label='' value='' />
              {provinces.map((item) =>
                <Picker.Item
                  label={item.place}
                  value={item.name}
                  key={item.id}
                />
              )}
            </Picker>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>  To    : </Text>
            <Picker
              selectedValue={selectedValue2}
              onValueChange={(itemValue) => setSelectedValue2(itemValue)}>
              <Picker.Item label='' value='' />
              {provinces.map((item) =>
                <Picker.Item
                  label={item.place}
                  value={item.name}
                  key={item.id}
                />
              )}
            </Picker>
          </View>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setFlag(true)
            }}
          >
            <Text
              style={styles.textStyle}
            >
              find
            </Text>
          </TouchableHighlight>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <Text style={styles.textHeader}>
              {selectedValue1}
            </Text>
            <Text style={styles.textHeader}>
              --
            </Text>
            <Text style={styles.textHeader}>
              {selectedValue2}
            </Text>
          </View>
        </View>
        <View>
          {flag == true ?
            <View>
              <View style={styles.viewList}>
                <Text style={styles.headList}>Flight</Text>
                <Text style={styles.headList}>Time</Text>
                <Text style={styles.headList}>Date</Text>
                <Text style={styles.headList}>BOOK</Text>
              </View>
              <ScrollView>
                <FlatList
                  data={data}
                  keyExtractor={(item) =>item.id_flight}
                  renderItem={({ item }) =>
                    <View style={styles.viewList}>
                      <Text style={styles.textList}>{item.id_flight}</Text>
                      <Text style={styles.textList}>{item.time}</Text>
                      <Text style={styles.textList}>{item.date}</Text>
                      <Text style={styles.textList}>
                      <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        value={({item})}
                        onPress={({item})=>console.log(item)}

                        >
                        <Text style={styles.textStyle}>BOOK</Text>
                      </TouchableHighlight>
                      {/* <Button title='BOOK' value={item} onPress={()=>test('a')}/> */}
                      </Text>
                    </View>
                  }
                />
              </ScrollView>
            </View>
            : <View>
              <Text />
            </View>
          }
        </View>
      </View>
      <View>
        <Modal
          transparent={true}
          visible={modalVisible}
        >
          <View>
            <ImageBackground
              source={imageBackground}
              style={{ width: '100%', height: "100%" }}
              imageStyle={{ backgroundColor: 'white' }}
            >
              <View>
                <AntDesign
                  name="left"
                  size={30}
                  color="black"
                  style={{ position: "absolute", top: 30, left: 20 }}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
              </View>
              <View
                style={{
                  paddingTop: 50,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}>
                <Text style={styles.textHeader}>
                  {selectedValue1}
                </Text>
                <Text style={styles.textHeader}>
                  --
              </Text>
                <Text style={styles.textHeader}>
                  {selectedValue2}
                </Text>
              </View>
              <View>
                <Text>NAME OF PASSENGER</Text>
                <Text>BUI THAI HIEU</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View>
                  <Text>FLIGHT</Text>
                  <Text>{dataFlight.id}</Text>
                  <Text></Text>
                </View>
                <View>
                  <Text>TIME</Text>
                  <Text>{dataFlight.time}</Text>
                </View>

              </View>
              <View>
                <Text>DATE</Text>
                <Text>{dataFlight.date}</Text>
              </View>
              <View>
                <Text>GATE</Text>
                <Text>A11</Text>
              </View>
            </ImageBackground>
          </View>
        </Modal>
      </View>
    </ScrollView>


  );
};
export default Flight;
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  header: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: '#fdbb2d',
    paddingBottom: 10
  },
  textHeader: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 10,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "red",
  },
  text: {
    fontSize: 30,
    color: '#50504e',
    paddingRight: 10,
    paddingLeft: 25

  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    flex: 0.8,
    fontSize: 15,
    borderRadius: 4,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  headList: {
    borderBottomWidth: 1,
    fontSize: 25,
    paddingHorizontal: 12,
    color: '#959D93'
  },
  viewList: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    alignContent: 'center',

  },
  textList: {
    fontSize: 20,
    paddingHorizontal: 5,
    width: 70,
    alignContent: 'center',
    justifyContent: "center"
  },
})
