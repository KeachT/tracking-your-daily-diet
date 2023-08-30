import { create } from 'zustand'
import { DateValue } from '@mantine/dates'

export type CurrentDateState = {
  currentDate: DateValue
  setCurrentDate: (currentDate: DateValue) => void
}

export const useCurrentDateStore = create<CurrentDateState>()((set) => ({
  currentDate: new Date(),
  setCurrentDate: (newCurrentDate) =>
    set(() => ({ currentDate: newCurrentDate })),
}))
