import { create } from 'zustand'

export type LoadingState = {
  isDataLoading: boolean
  setIsDataLoading: (isDataLoading: boolean) => void
}

export const useLoadingStateStore = create<LoadingState>((set) => ({
  // The default state for isDataLoading is set to true because the application
  // fetches data on initial load, and we want to show a loading skeleton immediately.
  isDataLoading: true,
  setIsDataLoading: (isDataLoading) => set(() => ({ isDataLoading })),
}))
