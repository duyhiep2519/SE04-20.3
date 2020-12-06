import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Boat from "./components/Boat";
import Bus from "./components/Bus";
import Flight from "./components/Flight";
import Train from "./components/Train";
import Details from "./screens/Details";
import Home from "./screens/Home";
import ViewPlaces from "./screens/ViewPlaces";
import { useSelector } from "react-redux";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const Drawer = createDrawerNavigator();

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
          <Drawer.Screen name="Flight" component={Flight} />
          <Drawer.Screen name="Boat" component={Boat} />
          <Drawer.Screen name="Train" component={Train} />
          <Drawer.Screen name="Bus" component={Bus} />
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
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};
export default Navigator;
