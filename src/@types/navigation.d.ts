export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      addMeal: {
        mealId: number | undefined;
      };
      meal: {
        mealId: number;
      };
      confirmation: {
        onDiet: boolean;
      };
    }
  }
}
