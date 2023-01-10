import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { MealsStorageDTO } from "./MealStorageDTO";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealsStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
