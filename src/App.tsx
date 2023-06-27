import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import VehicleListScreen from "./screens/VehicleListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import VehicleScreen from "./screens/VehicleScreen";
import "./i18n";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VehicleStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vehicles"
        component={VehicleListScreen}
        options={{ title: t("app.list") }}
      />
      <Stack.Screen
        name="Vehicle"
        component={VehicleScreen}
        options={{ title: t("app.item") }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={VehicleStack}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
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
            headerTitle: t("app.settings"),
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
