import { create } from 'zustand'

import { FetchStatus } from '@/constants'

import { DailyMealRecord } from '../../../API'

export type DailyMealRecordState = {
  dailyMealRecord: DailyMealRecord | null
  loadStatus: FetchStatus
  setDailyMealRecord: (dailyMealRecord: DailyMealRecord | null) => void
  setLoadStatus: (loadStatus: FetchStatus) => void
}

export const useDailyMealRecordStore = create<DailyMealRecordState>((set) => ({
  dailyMealRecord: null,
  loadStatus: 'idle',
  setDailyMealRecord: (newDailyMealRecord) =>
    set({ dailyMealRecord: newDailyMealRecord }),
  setLoadStatus: (loadStatus) => set({ loadStatus }),
}))
