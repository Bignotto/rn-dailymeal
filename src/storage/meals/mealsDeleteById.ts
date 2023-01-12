import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { MealsStorageDTO } from "./MealStorageDTO";

export async function mealsDeleteById(mealId: number) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealsStorageDTO[] = storage ? JSON.parse(storage) : [];

    const newMeals = meals.filter((m) => m.id !== mealId);

    const newMealsString = JSON.stringify(newMeals);

    await AsyncStorage.setItem(MEALS_COLLECTION, newMealsString);
  } catch (error) {
    throw error;
  }
}
