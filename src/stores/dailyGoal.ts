import { create } from 'zustand'

import { DailyGoal } from '../API'
import { createDailyGoalInitialValues } from '../features/daily-goal/utils'

export type DailyGoalState = {
  dailyGoal: DailyGoal
  setDailyGoal: (dailyGoal: DailyGoal) => void
}

export const useDailyGoalStore = create<DailyGoalState>()((set) => ({
  dailyGoal: createDailyGoalInitialValues(),
  setDailyGoal: (newDailyGoal) => set(() => ({ dailyGoal: newDailyGoal })),
}))
