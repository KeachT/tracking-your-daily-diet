import { defineData } from '@aws-amplify/backend'
import { aws_iam } from 'aws-cdk-lib'

import type { Backend } from '../backend'

const schema = `"""
Represents the daily nutritional goals for a user.
"""
type DailyGoal @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  calories: Float
  protein: Float
  carbohydrates: Float
  fat: Float
}

"""
Represents a user's daily meal record, which includes meals for breakfast, lunch, dinner, and snacks.
"""
type DailyMealRecord @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  date: AWSDate!
  breakfast: [FoodItem]
  lunch: [FoodItem]
  dinner: [FoodItem]
  snack: [FoodItem]
}

type FoodItem {
  id: ID!
  name: String!
  calories: Float
  protein: Float
  carbohydrates: Float
  fat: Float
}

enum MealCategoryName {
  BREAKFAST
  LUNCH
  DINNER
  SNACK
}

"""
Represents a user's meal preset that can be quickly applied to daily records.
Each user has one preset configuration that they can customize.
"""
type UserMealPreset @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  breakfast: [FoodItem]
  lunch: [FoodItem]
  dinner: [FoodItem]
  snack: [FoodItem]
}
`

export const data = defineData({
  migratedAmplifyGen1DynamoDbTableMappings: [
    {
      //The "branchName" variable needs to be the same as your deployment branch if you want to reuse your Gen1 app tables
      branchName: 'dev',
      modelNameToTableNameMapping: {
        DailyGoal: 'DailyGoal-35xqjopvlbh4df6l5vrg4qwe5y-dev',
        DailyMealRecord: 'DailyMealRecord-35xqjopvlbh4df6l5vrg4qwe5y-dev',
        UserMealPreset: 'UserMealPreset-35xqjopvlbh4df6l5vrg4qwe5y-dev',
      },
    },
    {
      // prod is deployed via the `main` Amplify Hosting branch, so the key is 'main'.
      branchName: 'main',
      modelNameToTableNameMapping: {
        DailyGoal: 'DailyGoal-cxyllhsh6fdyrhdchmpf2d5j7m-prod',
        DailyMealRecord: 'DailyMealRecord-cxyllhsh6fdyrhdchmpf2d5j7m-prod',
        UserMealPreset: 'UserMealPreset-cxyllhsh6fdyrhdchmpf2d5j7m-prod',
      },
    },
  ],
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
  schema,
})

export function applyEscapeHatches(backend: Backend) {
  const cfnGraphqlApi = backend.data.resources.cfnResources.cfnGraphqlApi
  cfnGraphqlApi.additionalAuthenticationProviders = [
    {
      authenticationType: 'AWS_IAM',
    },
  ]
  backend.auth.resources.authenticatedUserIamRole.addToPrincipalPolicy(
    new aws_iam.PolicyStatement({
      effect: aws_iam.Effect.ALLOW,
      actions: ['appsync:GraphQL'],
      resources: [
        `arn:aws:appsync:${backend.data.stack.region}:${backend.data.stack.account}:apis/35xqjopvlbh4df6l5vrg4qwe5y/*`,
      ],
    }),
  )
}
