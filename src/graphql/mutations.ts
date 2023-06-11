/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDailyGoal = /* GraphQL */ `
  mutation CreateDailyGoal(
    $input: CreateDailyGoalInput!
    $condition: ModelDailyGoalConditionInput
  ) {
    createDailyGoal(input: $input, condition: $condition) {
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
export const updateDailyGoal = /* GraphQL */ `
  mutation UpdateDailyGoal(
    $input: UpdateDailyGoalInput!
    $condition: ModelDailyGoalConditionInput
  ) {
    updateDailyGoal(input: $input, condition: $condition) {
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
export const deleteDailyGoal = /* GraphQL */ `
  mutation DeleteDailyGoal(
    $input: DeleteDailyGoalInput!
    $condition: ModelDailyGoalConditionInput
  ) {
    deleteDailyGoal(input: $input, condition: $condition) {
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
