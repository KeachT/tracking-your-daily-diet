import { create } from 'zustand'

import { DailyGoal } from '../API'

const initialDailyGoal: DailyGoal = {
  __typename: 'DailyGoal',
  id: '',
  calories: 0,
  protein: 0,
  carbohydrates: 0,
  fat: 0,
  createdAt: '',
  updatedAt: '',
}

export type DailyGoalState = {
  dailyGoal: DailyGoal
  setDailyGoal: (dailyGoal: DailyGoal) => void
  reset: () => void
}

export const useDailyGoalStore = create<DailyGoalState>()((set) => ({
  dailyGoal: { ...initialDailyGoal },
  setDailyGoal: (newDailyGoal) => set({ dailyGoal: newDailyGoal }),
  reset: () => set({ dailyGoal: { ...initialDailyGoal } }),
}))
