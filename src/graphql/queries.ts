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
    _version
    _deleted
    _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDailyGoalsQueryVariables,
  APITypes.ListDailyGoalsQuery
>;
export const syncDailyGoals = /* GraphQL */ `query SyncDailyGoals(
  $filter: ModelDailyGoalFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDailyGoals(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      calories
      protein
      carbohydrates
      fat
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncDailyGoalsQueryVariables,
  APITypes.SyncDailyGoalsQuery
>;
export const getMealRecord = /* GraphQL */ `query GetMealRecord($id: ID!) {
  getMealRecord(id: $id) {
    id
    date
    category
    foods {
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
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMealRecordQueryVariables,
  APITypes.GetMealRecordQuery
>;
export const listMealRecords = /* GraphQL */ `query ListMealRecords(
  $filter: ModelMealRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listMealRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMealRecordsQueryVariables,
  APITypes.ListMealRecordsQuery
>;
export const syncMealRecords = /* GraphQL */ `query SyncMealRecords(
  $filter: ModelMealRecordFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMealRecords(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      date
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMealRecordsQueryVariables,
  APITypes.SyncMealRecordsQuery
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
    _version
    _deleted
    _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserMealPresetsQueryVariables,
  APITypes.ListUserMealPresetsQuery
>;
export const syncUserMealPresets = /* GraphQL */ `query SyncUserMealPresets(
  $filter: ModelUserMealPresetFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserMealPresets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserMealPresetsQueryVariables,
  APITypes.SyncUserMealPresetsQuery
>;
