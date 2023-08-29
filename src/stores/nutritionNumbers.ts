import { create } from 'zustand'

type NutritionNumbersState = {
  dailyCalories: number
  dailyProtein: number
  dailyFat: number
  dailyCarbohydrates: number
  setDailyCalories: (dailyCalories: number) => void
  setDailyProtein: (dailyProtein: number) => void
  setDailyFat: (dailyFat: number) => void
  setDailyCarbohydrates: (dailyCarbohydrates: number) => void
}

export const useNutritionNumbersStore = create<NutritionNumbersState>()(
  (set) => ({
    dailyCalories: 0,
    dailyProtein: 0,
    dailyFat: 0,
    dailyCarbohydrates: 0,
    setDailyCalories: (newDailyCalories) =>
      set(() => ({ dailyCalories: newDailyCalories })),
    setDailyProtein: (newDailyProtein) =>
      set(() => ({ dailyProtein: newDailyProtein })),
    setDailyFat: (newDailyFat) => set(() => ({ dailyFat: newDailyFat })),
    setDailyCarbohydrates: (newDailyCarbohydrates) =>
      set(() => ({ dailyCarbohydrates: newDailyCarbohydrates })),
  })
)
