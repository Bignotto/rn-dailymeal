import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { MealsStorageDTO } from "./MealStorageDTO";

export async function mealsUpdateById(meal: MealsStorageDTO) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealsStorageDTO[] = storage ? JSON.parse(storage) : [];

    const newMeals = meals.map((m) => (m.id === meal.id ? meal : m));
    const newMealsString = JSON.stringify(newMeals);

    await AsyncStorage.setItem(MEALS_COLLECTION, newMealsString);
  } catch (error) {
    throw error;
  }
}
