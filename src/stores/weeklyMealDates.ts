import { create } from 'zustand'

export type WeeklyMealDatesState = {
  weeklyMealDates: any
  setWeeklyMealDates: (weeklyMealDates: any) => void
}

export const useWeeklyMealDates = create<WeeklyMealDatesState>()((set) => ({
  weeklyMealDates: [],
  setWeeklyMealDates: (newWeeklyMealDates) =>
    set(() => ({ weeklyMealDates: newWeeklyMealDates })),
}))
