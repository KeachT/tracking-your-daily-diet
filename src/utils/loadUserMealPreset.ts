import { fetchUserMealPreset } from '../api/user-meal-preset'
import { useUserMealPresetStore } from '../stores'

/**
 * Loads the user meal preset from the server and sets it in the state.
 *
 * Both `/preset` and `/day` read the same preset, so they share this loader to
 * keep the status in sync.
 *
 * @returns A promise that resolves when the user meal preset has been loaded.
 */
export const loadUserMealPreset = async (): Promise<void> => {
  const { setUserMealPreset, setLoadStatus } = useUserMealPresetStore.getState()

  setLoadStatus('loading')

  try {
    setUserMealPreset(await fetchUserMealPreset())
    setLoadStatus('ready')
  } catch {
    setLoadStatus('error')
  }
}
