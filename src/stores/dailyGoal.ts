import { create } from 'zustand'

import { DailyGoal } from '../API'
import { FetchStatus } from '../constants'

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
  loadStatus: FetchStatus
  setDailyGoal: (dailyGoal: DailyGoal) => void
  setLoadStatus: (loadStatus: FetchStatus) => void
  reset: () => void
}

export const useDailyGoalStore = create<DailyGoalState>()((set) => ({
  dailyGoal: { ...initialDailyGoal },
  loadStatus: 'idle',
  setDailyGoal: (newDailyGoal) => set({ dailyGoal: newDailyGoal }),
  setLoadStatus: (loadStatus) => set({ loadStatus }),
  reset: () => set({ dailyGoal: { ...initialDailyGoal }, loadStatus: 'ready' }),
}))
