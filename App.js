import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Parallel from "./screens/Parallel";
import Sequence from "./screens/Sequence";
import Spring from "./screens/Spring";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Stat from "./screens/Stat";
import FixForm from "./screens/Fix3";
import History from "./screens/History";
import Staff from "./screens/Staff";
import Admin from "./screens/Admin";
import Dummy from "./data/test";
import login from "./screens/Login";
// import Detail from "./screens/Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

const HomeNonStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-earth" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Stat"
        component={Stat}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-earth" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Staff"
        component={Staff}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-earth" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Admin"
        component={Admin}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-earth" size={size} color={color} />;
          },
        }}
      />

      {/* <Tab.Screen
      name="Dummy"
      component={Dummy}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="ios-earth" size={size} color={color} />;
        },
      }}
      /> */}
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeNonStack} />
        <Stack.Screen name="FixForm" component={FixForm} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Stat" component={Stat} />
        <Tab.Screen name="Detail" component={Detail} />
        {/* <Stack.Screen name="Dummy" component={Dummy}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Stack = createNativeStackNavigator();
