import React from "react";
import { SignIn } from "./src/screens/SignIn";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import theme from "./src/global/styles/theme";

import {
  useFonts,
  Heebo_300Light,
  Heebo_500Medium,
  Heebo_600SemiBold,
} from "@expo-google-fonts/heebo";

export default function App() {
  const [fontsLoaded] = useFonts({
    Heebo_300Light,
    Heebo_500Medium,
    Heebo_600SemiBold,
  });

if(!fontsLoaded){
  return <AppLoading />
}

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}
