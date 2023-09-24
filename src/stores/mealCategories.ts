import { create } from 'zustand'

export type MealCategoriesState = {
  mealCategories: any
  setMealCategories: (mealCategories: any) => void
}

export const useMealCategoriesStore = create<MealCategoriesState>()((set) => ({
  mealCategories: [],
  setMealCategories: (newMealCategories) => {
    // Exclude deleted foods
    const mealCategories = newMealCategories.map((newMealCategory: any) => {
      const foodItems = newMealCategory?.foods?.items?.filter(
        (newFood: any) => !newFood?._deleted
      )

      newMealCategory.foods.items = foodItems

      return newMealCategory
    })

    set(() => ({ mealCategories }))
  },
}))
