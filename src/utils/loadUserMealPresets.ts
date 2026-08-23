import { fetchUserMealPresets } from '../api/user-meal-preset'
import { useUserMealPresetStore } from '../stores'

/**
 * Loads the user's meal presets from the server and sets them in the state.
 *
 * Both `/preset` and `/day` read the same presets, so they share this loader to
 * keep the status in sync.
 *
 * @returns A promise that resolves when the user meal presets have been loaded.
 */
export const loadUserMealPresets = async (): Promise<void> => {
  const { setUserMealPresets, setLoadStatus } =
    useUserMealPresetStore.getState()

  setLoadStatus('loading')

  try {
    setUserMealPresets(await fetchUserMealPresets())
    setLoadStatus('ready')
  } catch {
    setLoadStatus('error')
  }
}
