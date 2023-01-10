import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddMeal from "@screens/AddMeal";
import Home from "@screens/Home";
import Stats from "@screens/Stats";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="addMeal" component={AddMeal} />
    </Navigator>
  );
}
