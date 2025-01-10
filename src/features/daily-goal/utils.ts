import { DailyGoal } from '../../API'
import { DailyGoalState } from '../../stores'
import { addDailyGoal, updDailyGoal } from './api'

/**
 * Create initial values for a daily goal.
 *
 * @returns {DailyGoal} The initial daily goal object.
 */
export const createDailyGoalInitialValues = (): DailyGoal => {
  const dailyGoal: DailyGoal = {
    __typename: 'DailyGoal',
    id: '',
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    createdAt: '',
    updatedAt: '',
    _version: 1,
    _lastChangedAt: 1,
  }

  return dailyGoal
}

/**
 * Saves the daily goal by either updating an existing goal or adding a new one.
 *
 * @param dailyGoal - The daily goal object to be saved. It contains the details of the daily goal.
 * @returns A promise that resolves when the daily goal has been saved.
 */
export const saveDailyGoal = async (
  dailyGoal: DailyGoalState['dailyGoal'],
  setDailyGoal: DailyGoalState['setDailyGoal']
) => {
  const dailyGoalId = dailyGoal.id

  if (dailyGoalId) {
    await updDailyGoal(dailyGoal, setDailyGoal)
  }

  if (!dailyGoalId) {
    await addDailyGoal(dailyGoal, setDailyGoal)
  }
}
