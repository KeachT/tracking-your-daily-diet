import { DateValue } from '@mantine/dates'
import { create } from 'zustand'

export type CurrentDateState = {
  currentDate: DateValue
  setCurrentDate: (currentDate: DateValue) => void
}

export const useCurrentDateStore = create<CurrentDateState>()((set) => ({
  currentDate: new Date(),
  setCurrentDate: (newCurrentDate) => set({ currentDate: newCurrentDate }),
}))
