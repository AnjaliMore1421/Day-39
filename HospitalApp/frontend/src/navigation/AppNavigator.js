import React from "react";

import * as Linking from "expo-linking";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import PatientScreen from "../screens/PatientScreen";
import DoctorScreen from "../screens/DoctorScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import PharmacyScreen from "../screens/PharmacyScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: [
    Linking.createURL("/"),
    "hospitalapp://",
  ],

  config: {
    screens: {
      Main: {
        screens: {
          Dashboard: "dashboard",
          Patients: "patients",
          Doctors: "doctors",
          Appointments: "appointments",
          Pharmacy: "pharmacy",
          Profile: "profile",
        },
      },
    },
  },
};

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Patients"
        component={PatientScreen}
      />

      <Tab.Screen
        name="Doctors"
        component={DoctorScreen}
      />

      <Tab.Screen
        name="Appointments"
        component={AppointmentScreen}
      />

      <Tab.Screen
        name="Pharmacy"
        component={PharmacyScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}