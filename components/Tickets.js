import React, { useEffect, useState } from "react";
import {
    MaterialCommunityIcons, 
    MaterialIcons 
} from "@expo/vector-icons";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ScrollView,
    FlatList,
    ImageBackground
} from "react-native";
import { useSelector } from "react-redux";
import firebase from "../firebase"
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tickets = () => {
    const isLogin = useSelector((state) => state.login);
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        const featchData = async () => {
            await firebase
                .database()
                .ref()
                .child("tickets")
                .on("value", (snapshot) => {
                    setTickets(Object.values(snapshot.val()));
                });
        };
        featchData();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ 
                    uri: 'https://5.imimg.com/data5/EN/ZD/XB/SELLER-6189449/flight-booking-service-500x500.jpg' 
                }}
                    style={styles.image} >
            </ImageBackground>
            <ScrollView style={{ top: 320, flex: 1 }}>
                <FlatList
                    data={
                        tickets.filter((item) => 
                            item.email === isLogin.email)}
                    renderItem={({ item }) =>
                        <View style={styles.viewList} >
                            <View style={{top:-10}}>
                                <Text style={{fontWeight:'bold'}}>{item.nowDateTime}</Text>
                            </View>

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ top:-8, fontWeight: 'bold', color: 'red' }}>
                                    {item.class} Class
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View 
                                    style={{ 
                                        marginRight: 20, 
                                        borderRightWidth: 1, 
                                        borderRightColor: '#9F9C9C', 
                                        width: windowWidth / 2 + 20 
                                        }} >
                                    <View style={{ flexDirection: 'row', }}>
                                        <View>
                                            <Text style={{
                                                marginBottom: 30, 
                                                transform: [
                                                    { rotateX: "-15deg" },
                                                    { rotateZ: "-15deg" }
                                                ]
                                            }}>
                                                <MaterialIcons
                                                    name="flight-takeoff"
                                                    size={40}
                                                    color="black"
                                                    marginBottom={50}
                                                />
                                            </Text>
                                            <Text style={{
                                                transform: [
                                                    { rotate: "90deg" },
                                                ]
                                            }}>
                                                <MaterialCommunityIcons
                                                    name="barcode"
                                                    size={60}
                                                    color="black"
                                                    top={10}
                                                />
                                            </Text>

                                        </View>
                                        <View>
                                            <View >
                                                <Text style={styles.textDefault}>
                                                    Name of Passenger
                                                </Text>
                                                <Text style={styles.textData}>
                                                    {item.name}
                                                </Text>
                                                <Text style={styles.textDefault}>
                                                    From
                                                </Text>
                                                <Text style={styles.textData}>
                                                    {item.from}
                                                </Text>
                                                <Text style={styles.textDefault}>
                                                    To
                                                </Text>
                                                <Text style={styles.textData}>
                                                    {item.to}
                                                </Text>
                                            </View>

                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View>
                                                        <Text style={styles.textDefault}>
                                                            Flight
                                                        </Text>
                                                        <Text style={styles.textData}>
                                                            {item.id_flight}
                                                        </Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.textDefault}>   Date</Text>
                                                        <Text style={styles.textData}>
                                                            {item.date}   </Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.textDefault}>
                                                            Time
                                                        </Text>
                                                        <Text style={styles.textData}>
                                                            {item.time}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View>
                                    <View >
                                        <Text style={styles.textDefault1}>
                                            Name of Passenger
                                        </Text>
                                        <Text style={styles.textData1}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.textDefault1}>
                                            From
                                        </Text>
                                        <Text style={styles.textData1}>
                                            {item.from}
                                        </Text>
                                        <Text style={styles.textDefault1}>
                                            To
                                        </Text>
                                        <Text style={styles.textData1}>
                                            {item.to}
                                        </Text>
                                    </View>

                                    <View>
                                        <View style={{ flexDirection: 'row',marginBottom:10 }}>
                                            <View>
                                                <Text style={styles.textDefault1}>
                                                    Flight
                                                </Text>
                                                <Text style={styles.textData1}>
                                                    {item.id_flight}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text style={styles.textDefault1}>   Date</Text>
                                                <Text style={styles.textData1}>
                                                    {item.date}   </Text>
                                            </View>
                                            <View>
                                                <Text style={styles.textDefault1}>
                                                    Time
                                                </Text>
                                                <Text style={styles.textData1}>
                                                    {item.time}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                    keyExtractor={(item, index) => "key" + index}
                />
            </ScrollView>
        </View>
    );
};
export default Tickets;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#E0DFD0'
    },
    image: {
        position: "absolute",
        width: 450,
        height: 300,
        backgroundColor: 'blue',
        justifyContent: 'center',
        top:'4%',
    },
    viewList: {
        width: windowWidth - 30,
        height: windowWidth / 2 - 20,
        marginBottom: 30,
        backgroundColor: '#E5F2FF',
        borderTopColor: '#70B6FD',
        borderBottomColor: '#7EBEFF',
        borderTopWidth: 20,
        borderBottomWidth: 15,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        height: windowWidth / 2,
        marginTop:10
    },
    text: {
        textAlign: "left",
        color: "black",
        fontWeight: "bold"
    },
    textData: {
        textAlign: "left",
        color: "black",
        fontWeight: "bold",
    },
    textDefault: {
        textAlign: "left",
        color: "#BEB8B8",
        fontWeight: "bold",
    },
    textData1: {
        textAlign: "left",
        color: "black",
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 3
    },
    textDefault1: {
        textAlign: "left",
        color: "#BEB8B8",
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 3
    },

});
