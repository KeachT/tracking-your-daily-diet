import { create } from 'zustand'

import { DailyGoal } from '../API'

export const createDailyGoalInitialValues = (): DailyGoal => ({
  __typename: 'DailyGoal',
  id: '',
  calories: 0,
  protein: 0,
  carbohydrates: 0,
  fat: 0,
  createdAt: '',
  updatedAt: '',
  _version: 1,
  _lastChangedAt: 1,
})

export type DailyGoalState = {
  dailyGoal: DailyGoal
  setDailyGoal: (dailyGoal: DailyGoal) => void
}

export const useDailyGoalStore = create<DailyGoalState>()((set) => ({
  dailyGoal: createDailyGoalInitialValues(),
  setDailyGoal: (newDailyGoal) => set(() => ({ dailyGoal: newDailyGoal })),
}))
