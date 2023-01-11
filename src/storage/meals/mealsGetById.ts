import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/config";
import { MealsStorageDTO } from "./MealStorageDTO";

export async function mealsGetById(mealId: number) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealsStorageDTO[] = storage ? JSON.parse(storage) : [];

    const [meal] = meals.filter((m) => m.id === mealId);

    return meal;
  } catch (error) {
    throw error;
  }
}
