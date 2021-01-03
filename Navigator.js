import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Flight from "./components/Flight";
import Picker from "./components/ImagePicker";
import Profile from "./components/Profile";
import Tickets from "./components/Tickets";
import TabNavigation from "./navigation/TabNavigation";
import Details from "./screens/Details";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ViewPlaces from "./screens/ViewPlaces";

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
              title: "TRAVEL APP SE04-20.3",
              headerStyle: {
                backgroundColor: "#fff",
              },
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
