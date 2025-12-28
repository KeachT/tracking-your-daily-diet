import { fetchDailyGoal } from '../api/daily-goal'
import { DailyGoalState } from '../stores'

/**
 * Fetches the daily goal from the server and sets it in the state.
 *
 * @param setDailyGoal - A function to update the daily goal state.
 * @returns A promise that resolves when the daily goal has been fetched and set.
 */
export const fetchAndSetDailyGoal = async (
  setDailyGoal: DailyGoalState['setDailyGoal']
) => {
  const dailyGoal = await fetchDailyGoal()
  setDailyGoal(dailyGoal as DailyGoalState['dailyGoal'])
}
