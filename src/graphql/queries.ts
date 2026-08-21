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
    calories
    carbohydrates
    createdAt
    fat
    id
    owner
    protein
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDailyGoalQueryVariables,
  APITypes.GetDailyGoalQuery
>;
export const getDailyMealRecord = /* GraphQL */ `query GetDailyMealRecord($id: ID!) {
  getDailyMealRecord(id: $id) {
    breakfast {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    createdAt
    date
    dinner {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    id
    lunch {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    owner
    snack {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDailyMealRecordQueryVariables,
  APITypes.GetDailyMealRecordQuery
>;
export const getUserMealPreset = /* GraphQL */ `query GetUserMealPreset($id: ID!) {
  getUserMealPreset(id: $id) {
    breakfast {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    createdAt
    dinner {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    id
    lunch {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    name
    owner
    snack {
      calories
      carbohydrates
      fat
      id
      name
      protein
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserMealPresetQueryVariables,
  APITypes.GetUserMealPresetQuery
>;
export const listDailyGoals = /* GraphQL */ `query ListDailyGoals(
  $filter: ModelDailyGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listDailyGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      calories
      carbohydrates
      createdAt
      fat
      id
      owner
      protein
      updatedAt
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
export const listDailyMealRecords = /* GraphQL */ `query ListDailyMealRecords(
  $filter: ModelDailyMealRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listDailyMealRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      date
      id
      owner
      updatedAt
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
export const listUserMealPresets = /* GraphQL */ `query ListUserMealPresets(
  $filter: ModelUserMealPresetFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserMealPresets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      owner
      updatedAt
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
