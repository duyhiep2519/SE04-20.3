import React from "react";
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Flight from "./components/Flight";
import Details from "./screens/Details";
import Tickets from "./components/Tickets";
import Profile from "./components/Profile";
import Picker from "./components/ImagePicker";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ViewPlaces from "./screens/ViewPlaces";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import icons from "./constants/icons";
import { TouchableOpacity, Image } from "react-native";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};
const Stack = createStackNavigator();

const Navigator = () => {
  const isLogin = useSelector((state) => state.login);

  if (isLogin) {
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={"Home"}>
          {/* Screens */}
          {/* Tabs */}
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{
              title: "Travel app",
              headerStyle: {
                backgroundColor: "#fff",
              },

              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => console.log("Menu")}
                >
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Flight"
            component={Flight}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewPlaces"
            component={ViewPlaces}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Picker"
            component={Picker}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {/* Screens */}

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
export default Navigator;
