import { create } from 'zustand'

import { MealDate } from '../API'

export type MealDateState = {
  mealDate: MealDate | null | undefined
  setMealDate: (mealDate: MealDate | null | undefined) => void
}

export const useMealDateStore = create<MealDateState>()((set) => ({
  mealDate: {
    __typename: 'MealDate',
    id: '',
    date: '',
    mealCategories: null,
    createdAt: '',
    updatedAt: '',
    _version: 1,
    _lastChangedAt: 1,
  },
  setMealDate: (newMealDate) => set(() => ({ mealDate: newMealDate })),
}))
