import { fetchDailyGoal } from '../api/daily-goal'
import { useDailyGoalStore } from '../stores'

const runLoad = async () => {
  const { setDailyGoal, setLoadStatus } = useDailyGoalStore.getState()

  setLoadStatus('loading')

  try {
    const dailyGoal = await fetchDailyGoal()
    if (dailyGoal) {
      // No record yet (new user or guest) is a success, not an error.
      setDailyGoal(dailyGoal)
    }
    setLoadStatus('ready')
  } catch {
    setLoadStatus('error')
  }
}

let inFlight: Promise<void> | null = null

/**
 * Loads the daily goal from the server and sets it in the state.
 *
 * The status is what lets the UI tell "not fetched yet" apart from "the goal is
 * actually zero", so it is always moved out of 'loading' — including on failure.
 *
 * @returns A promise that resolves when the daily goal has been loaded.
 */
export const loadDailyGoal = (): Promise<void> => {
  if (!inFlight) {
    inFlight = runLoad().finally(() => {
      inFlight = null
    })
  }

  return inFlight
}
