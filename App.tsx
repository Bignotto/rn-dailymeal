import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import Home from "@screens/Home";

import theme from "@theme/light";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Home />
      </ThemeProvider>
    </>
  );
}
