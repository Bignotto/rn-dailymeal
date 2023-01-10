import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { mealsGetAll } from "./mealsGetAll";
import { MealsStorageDTO } from "./MealStorageDTO";

export async function mealsCreate(newMeal: MealsStorageDTO) {
  try {
    const meals = await mealsGetAll();

    const stograge = JSON.stringify([...meals, newMeal]);

    await AsyncStorage.setItem(MEALS_COLLECTION, stograge);
  } catch (error) {
    throw error;
  }
}
