import { MealsStorageDTO } from "@storage/meals/MealStorageDTO";

type SectionMealsList = {
  title: string;
  data: MealsStorageDTO[];
};

function formatMealsList(meals: MealsStorageDTO[]): SectionMealsList[] {
  const sections = meals
    .map((m) => m.date)
    .filter((m, i, s) => s.indexOf(m) === i);

  const formatedMeals = sections.map((s) => {
    const sectionMeals = meals.filter((m) => m.date === s);
    return {
      title: s,
      data: sectionMeals,
    };
  });

  return formatedMeals;
}

export { formatMealsList };
