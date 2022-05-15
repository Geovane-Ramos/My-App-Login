import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
