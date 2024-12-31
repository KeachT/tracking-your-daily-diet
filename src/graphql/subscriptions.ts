/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDailyGoal = /* GraphQL */ `subscription OnCreateDailyGoal(
  $filter: ModelSubscriptionDailyGoalFilterInput
  $owner: String
) {
  onCreateDailyGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDailyGoalSubscriptionVariables,
  APITypes.OnCreateDailyGoalSubscription
>;
export const onUpdateDailyGoal = /* GraphQL */ `subscription OnUpdateDailyGoal(
  $filter: ModelSubscriptionDailyGoalFilterInput
  $owner: String
) {
  onUpdateDailyGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDailyGoalSubscriptionVariables,
  APITypes.OnUpdateDailyGoalSubscription
>;
export const onDeleteDailyGoal = /* GraphQL */ `subscription OnDeleteDailyGoal(
  $filter: ModelSubscriptionDailyGoalFilterInput
  $owner: String
) {
  onDeleteDailyGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDailyGoalSubscriptionVariables,
  APITypes.OnDeleteDailyGoalSubscription
>;
export const onCreateMealRecord = /* GraphQL */ `subscription OnCreateMealRecord(
  $filter: ModelSubscriptionMealRecordFilterInput
  $owner: String
) {
  onCreateMealRecord(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMealRecordSubscriptionVariables,
  APITypes.OnCreateMealRecordSubscription
>;
export const onUpdateMealRecord = /* GraphQL */ `subscription OnUpdateMealRecord(
  $filter: ModelSubscriptionMealRecordFilterInput
  $owner: String
) {
  onUpdateMealRecord(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMealRecordSubscriptionVariables,
  APITypes.OnUpdateMealRecordSubscription
>;
export const onDeleteMealRecord = /* GraphQL */ `subscription OnDeleteMealRecord(
  $filter: ModelSubscriptionMealRecordFilterInput
  $owner: String
) {
  onDeleteMealRecord(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMealRecordSubscriptionVariables,
  APITypes.OnDeleteMealRecordSubscription
>;
