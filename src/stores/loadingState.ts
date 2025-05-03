import { create } from 'zustand'

export type LoadingState = {
  isDataLoading: boolean
  setIsDataLoading: (isDataLoading: boolean) => void
}

export const useLoadingStateStore = create<LoadingState>((set) => ({
  isDataLoading: true,
  setIsDataLoading: (isDataLoading) => set(() => ({ isDataLoading })),
}))
