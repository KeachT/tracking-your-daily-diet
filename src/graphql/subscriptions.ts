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
export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood(
    $filter: ModelSubscriptionFoodFilterInput
    $owner: String
  ) {
    onCreateFood(filter: $filter, owner: $owner) {
      id
      name
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
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood(
    $filter: ModelSubscriptionFoodFilterInput
    $owner: String
  ) {
    onUpdateFood(filter: $filter, owner: $owner) {
      id
      name
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
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood(
    $filter: ModelSubscriptionFoodFilterInput
    $owner: String
  ) {
    onDeleteFood(filter: $filter, owner: $owner) {
      id
      name
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
