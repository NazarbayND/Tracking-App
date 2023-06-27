import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import VehicleListScreen from "./screens/VehicleListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import VehicleScreen from "./screens/VehicleScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VehicleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vehicles" component={VehicleListScreen} />
      <Stack.Screen name="Vehicle" component={VehicleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={VehicleStack}
          options={{
            headerShown: false,
            tabBarLabel: "List",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
