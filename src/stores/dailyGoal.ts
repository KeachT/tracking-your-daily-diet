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

export type DailyGoalLoadStatus = 'idle' | 'loading' | 'ready' | 'error'

export type DailyGoalState = {
  dailyGoal: DailyGoal
  loadStatus: DailyGoalLoadStatus
  setDailyGoal: (dailyGoal: DailyGoal) => void
  setLoadStatus: (loadStatus: DailyGoalLoadStatus) => void
  reset: () => void
}

export const useDailyGoalStore = create<DailyGoalState>()((set) => ({
  dailyGoal: { ...initialDailyGoal },
  loadStatus: 'idle',
  setDailyGoal: (newDailyGoal) => set({ dailyGoal: newDailyGoal }),
  setLoadStatus: (loadStatus) => set({ loadStatus }),
  reset: () => set({ dailyGoal: { ...initialDailyGoal }, loadStatus: 'ready' }),
}))
