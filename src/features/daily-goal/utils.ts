import {
  CreateDailyGoalInput,
  CreateDailyGoalMutationVariables,
  UpdateDailyGoalInput,
  UpdateDailyGoalMutationVariables,
} from '../../API'
import { addDailyGoal, updDailyGoal } from '../../api/daily-goal'
import { DailyGoalState, useDailyGoalStore } from '../../stores'

/**
 * Saves the daily goal by either updating an existing goal or creating a new one.
 *
 * Saving is refused unless the goal was actually loaded: an empty id on an
 * unloaded goal would otherwise be read as "no goal yet" and create a duplicate
 * record alongside the existing one.
 *
 * @param dailyGoal - The current state of the daily goal.
 * @param setDailyGoal - A function to update the state of the daily goal.
 * @returns A promise that resolves when the daily goal has been saved.
 */
export const saveDailyGoal = async (
  dailyGoal: DailyGoalState['dailyGoal'],
  setDailyGoal: DailyGoalState['setDailyGoal'],
) => {
  if (useDailyGoalStore.getState().loadStatus !== 'ready') {
    throw new Error('Cannot save a daily goal that has not been loaded')
  }

  const dailyGoalId = dailyGoal.id

  if (dailyGoalId) {
    const updateDailyGoalInput: UpdateDailyGoalInput = {
      id: dailyGoal.id,
      calories: dailyGoal.calories,
      protein: dailyGoal.protein,
      carbohydrates: dailyGoal.carbohydrates,
      fat: dailyGoal.fat,
    }

    const variables: UpdateDailyGoalMutationVariables = {
      input: updateDailyGoalInput,
    }

    const updatedDailyGoal = await updDailyGoal(variables)
    setDailyGoal(updatedDailyGoal as DailyGoalState['dailyGoal'])
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
    setDailyGoal(newDailyGoal as DailyGoalState['dailyGoal'])
  }
}
