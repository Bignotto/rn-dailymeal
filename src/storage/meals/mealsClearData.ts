import AsyncStorage from "@react-native-async-storage/async-storage";

export async function mealsClear() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
}
