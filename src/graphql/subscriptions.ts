/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDailyGoal = /* GraphQL */ `
  subscription OnCreateDailyGoal(
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
      owner
    }
  }
`;
export const onUpdateDailyGoal = /* GraphQL */ `
  subscription OnUpdateDailyGoal(
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
      owner
    }
  }
`;
export const onDeleteDailyGoal = /* GraphQL */ `
  subscription OnDeleteDailyGoal(
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
      owner
    }
  }
`;
