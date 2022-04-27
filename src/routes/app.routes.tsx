import React from "react";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
