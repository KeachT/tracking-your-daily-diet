import { create } from 'zustand'

export type WeeklyMealCategoriesState = {
  weeklyMealCategories: any
  setWeeklyMealCategories: (mealCategories: any) => void
}

export const useWeeklyMealCategoriesStore = create<WeeklyMealCategoriesState>()(
  (set) => ({
    weeklyMealCategories: [],
    setWeeklyMealCategories: (newMealCategories) => {
      // Exclude deleted foods
      const mealCategories = newMealCategories.map((newMealCategory: any) => {
        const foodItems = newMealCategory?.foods?.items?.filter(
          (newFood: any) => !newFood?._deleted
        )

        newMealCategory.foods.items = foodItems

        return newMealCategory
      })

      set(() => ({ weeklyMealCategories: mealCategories }))
    },
  })
)
