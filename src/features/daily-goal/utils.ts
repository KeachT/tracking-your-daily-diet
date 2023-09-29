import { DailyGoal } from '../../API'

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
