import { GraphQLQuery } from '@aws-amplify/api'

import {
  CreateDailyGoalMutation,
  CreateDailyGoalMutationVariables,
} from '../../API'
import { createDailyGoal } from '../../graphql/mutations'
import { DailyGoalState } from '../../stores'
import { client } from '../../utils/amplifyClient'
import { reportError } from '../../utils/reportError'
import { guestAddDailyGoal } from '../guest/guest-storage'
import { getGuestModeFlag } from '../guest/guestModeFlag'

export const addDailyGoal = async (
  variables: CreateDailyGoalMutationVariables,
) => {
  if (getGuestModeFlag()) return guestAddDailyGoal(variables)

  try {
    const { data } = await client.graphql<
      GraphQLQuery<CreateDailyGoalMutation>
    >({
      query: createDailyGoal,
      variables,
      authMode: 'userPool',
    })

    const dailyGoal = data?.createDailyGoal as DailyGoalState['dailyGoal']
    if (!dailyGoal) {
      throw new Error('Failed to create daily goal')
    }

    return dailyGoal
  } catch (error) {
    reportError('Error creating DailyGoal:', error)
    throw error
  }
}
