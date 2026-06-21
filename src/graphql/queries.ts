/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDailyGoal = /* GraphQL */ `query GetDailyGoal($id: ID!) {
  getDailyGoal(id: $id) {
    id
    calories
    protein
    carbohydrates
    fat
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDailyGoalQueryVariables,
  APITypes.GetDailyGoalQuery
>;
export const listDailyGoals = /* GraphQL */ `query ListDailyGoals(
  $filter: ModelDailyGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listDailyGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      calories
      protein
      carbohydrates
      fat
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDailyGoalsQueryVariables,
  APITypes.ListDailyGoalsQuery
>;
export const getDailyMealRecord = /* GraphQL */ `query GetDailyMealRecord($id: ID!) {
  getDailyMealRecord(id: $id) {
    id
    date
    breakfast {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    lunch {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    dinner {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    snack {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDailyMealRecordQueryVariables,
  APITypes.GetDailyMealRecordQuery
>;
export const listDailyMealRecords = /* GraphQL */ `query ListDailyMealRecords(
  $filter: ModelDailyMealRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listDailyMealRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDailyMealRecordsQueryVariables,
  APITypes.ListDailyMealRecordsQuery
>;
export const getUserMealPreset = /* GraphQL */ `query GetUserMealPreset($id: ID!) {
  getUserMealPreset(id: $id) {
    id
    breakfast {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    lunch {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    dinner {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    snack {
      id
      name
      calories
      protein
      carbohydrates
      fat
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserMealPresetQueryVariables,
  APITypes.GetUserMealPresetQuery
>;
export const listUserMealPresets = /* GraphQL */ `query ListUserMealPresets(
  $filter: ModelUserMealPresetFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserMealPresets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserMealPresetsQueryVariables,
  APITypes.ListUserMealPresetsQuery
>;
