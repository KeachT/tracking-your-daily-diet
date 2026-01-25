import { GraphQLQuery } from '@aws-amplify/api'

import {
  CreateDailyGoalMutation,
  CreateDailyGoalMutationVariables,
} from '../../API'
import { createDailyGoal } from '../../graphql/mutations'
import { DailyGoalState } from '../../stores'
import { client } from '../amplifyClient'

export const addDailyGoal = async (
  variables: CreateDailyGoalMutationVariables
) => {
  try {
    const { data } = await client.graphql<GraphQLQuery<CreateDailyGoalMutation>>({
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
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error creating DailyGoal:', error)
    }
    throw error
  }
}
