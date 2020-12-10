import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Boat from "../components/Boat";
import Flight from "../components/Flight";
import Train from "../components/Train";

const bookTab = createBottomTabNavigator();
const Book = () => {
  return (
    <bookTab.Navigator>
      <bookTab.Screen name="Flight" component={Flight} />
      <bookTab.Screen name="Boat" component={Boat} />
      <bookTab.Screen name="Train" component={Train} />
    </bookTab.Navigator>
  );
};
export default Book;
