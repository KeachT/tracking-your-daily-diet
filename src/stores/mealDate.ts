import { create } from 'zustand'

export type MealDateState = {
  mealDate: any
  setMealDate: (mealDate: any) => void
}

export const useMealDateStore = create<MealDateState>()((set) => ({
  mealDate: null,
  setMealDate: (newMealDate) => set(() => ({ mealDate: newMealDate })),
}))
