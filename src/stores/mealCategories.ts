import { create } from 'zustand'

export type MealCategoriesState = {
  mealCategories: any
  setMealCategories: (mealCategories: any) => void
}

export const useMealCategoriesStore = create<MealCategoriesState>()((set) => ({
  mealCategories: [],
  setMealCategories: (newMealCategories) =>
    set(() => ({ mealCategories: newMealCategories })),
}))
