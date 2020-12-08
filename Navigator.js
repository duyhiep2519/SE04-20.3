import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Book from "./screens/Book";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ViewPlaces from "./screens/ViewPlaces";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Navigator = () => {
  const isLogin = useSelector((state) => state.login);
  if (!isLogin) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            itemStyle: { marginVertical: 20 },
          }}
          overlayColor="transparent"
          initialRoute="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Drawer.Screen name="ViewPlaces" component={ViewPlaces} />
          <Drawer.Screen name="Details" component={Details} />
          <Drawer.Screen name="Book" component={Book} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            itemStyle: { marginVertical: 20 },
          }}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="SignUp" component={SignUp} />
          
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};
export default Navigator;
