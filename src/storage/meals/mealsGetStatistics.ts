import { mealsGetAll } from "./mealsGetAll";
import { MealsStorageDTO } from "./MealStorageDTO";

async function mealsGetStatistics(): Promise<MealsStatisticsDTO> {
  const stograge = await mealsGetAll();

  const mealsTotal = stograge.length;
  const bestSequence = calculateBestOnDietSequence(stograge);
  const mealsOnDietTotal = stograge.filter((m) => m.onDiet).length;
  const mealsOffDietTotal = mealsTotal - mealsOnDietTotal;
  const ratio = (mealsOnDietTotal / mealsTotal) * 100;

  return Promise.resolve({
    bestSequence,
    mealsTotal,
    mealsOnDietTotal,
    mealsOffDietTotal,
    ratio,
  });
}

function calculateBestOnDietSequence(meals: MealsStorageDTO[]) {
  let counter = 0;
  let max = 0;

  meals.forEach((m) => {
    if (m.onDiet) {
      counter++;

      if (counter > max) max = counter;
      return;
    }

    if (counter > max) max = counter;
    counter = 0;
  });

  return max;
}

export { mealsGetStatistics };
