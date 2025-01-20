import {
  CreateDailyGoalInput,
  CreateDailyGoalMutationVariables,
  DailyGoal,
  UpdateDailyGoalInput,
  UpdateDailyGoalMutationVariables,
} from '../../API'
import {
  addDailyGoal,
  fetchDailyGoal,
  updDailyGoal,
} from '../../api/daily-goal'
import { DailyGoalState } from '../../stores'

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
 * Saves the daily goal by either updating an existing goal or creating a new one.
 *
 * @param dailyGoal - The current state of the daily goal.
 * @param setDailyGoal - A function to update the state of the daily goal.
 * @returns A promise that resolves when the daily goal has been saved.
 */
export const saveDailyGoal = async (
  dailyGoal: DailyGoalState['dailyGoal'],
  setDailyGoal: DailyGoalState['setDailyGoal']
) => {
  const dailyGoalId = dailyGoal.id

  if (dailyGoalId) {
    const updateDailyGoalInput: UpdateDailyGoalInput = {
      id: dailyGoal.id,
      calories: dailyGoal.calories,
      protein: dailyGoal.protein,
      carbohydrates: dailyGoal.carbohydrates,
      fat: dailyGoal.fat,
      _version: dailyGoal._version,
    }

    const variables: UpdateDailyGoalMutationVariables = {
      input: updateDailyGoalInput,
    }

    const updatedDailyGoal = await updDailyGoal(variables)
    setDailyGoal(updatedDailyGoal as DailyGoal)
  }

  if (!dailyGoalId) {
    const createDailyGoalInput: CreateDailyGoalInput = {
      calories: dailyGoal.calories,
      protein: dailyGoal.protein,
      carbohydrates: dailyGoal.carbohydrates,
      fat: dailyGoal.fat,
    }

    const variables: CreateDailyGoalMutationVariables = {
      input: createDailyGoalInput,
    }

    const newDailyGoal = await addDailyGoal(variables)
    setDailyGoal(newDailyGoal as DailyGoal)
  }
}

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
  setDailyGoal(dailyGoal as DailyGoal)
}
