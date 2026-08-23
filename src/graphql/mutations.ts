/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDailyGoal = /* GraphQL */ `mutation CreateDailyGoal(
  $condition: ModelDailyGoalConditionInput
  $input: CreateDailyGoalInput!
) {
  createDailyGoal(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateDailyGoalMutationVariables,
  APITypes.CreateDailyGoalMutation
>;
export const createDailyMealRecord = /* GraphQL */ `mutation CreateDailyMealRecord(
  $condition: ModelDailyMealRecordConditionInput
  $input: CreateDailyMealRecordInput!
) {
  createDailyMealRecord(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateDailyMealRecordMutationVariables,
  APITypes.CreateDailyMealRecordMutation
>;
export const createUserMealPreset = /* GraphQL */ `mutation CreateUserMealPreset(
  $condition: ModelUserMealPresetConditionInput
  $input: CreateUserMealPresetInput!
) {
  createUserMealPreset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMealPresetMutationVariables,
  APITypes.CreateUserMealPresetMutation
>;
export const deleteDailyGoal = /* GraphQL */ `mutation DeleteDailyGoal(
  $condition: ModelDailyGoalConditionInput
  $input: DeleteDailyGoalInput!
) {
  deleteDailyGoal(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteDailyGoalMutationVariables,
  APITypes.DeleteDailyGoalMutation
>;
export const deleteDailyMealRecord = /* GraphQL */ `mutation DeleteDailyMealRecord(
  $condition: ModelDailyMealRecordConditionInput
  $input: DeleteDailyMealRecordInput!
) {
  deleteDailyMealRecord(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteDailyMealRecordMutationVariables,
  APITypes.DeleteDailyMealRecordMutation
>;
export const deleteUserMealPreset = /* GraphQL */ `mutation DeleteUserMealPreset(
  $condition: ModelUserMealPresetConditionInput
  $input: DeleteUserMealPresetInput!
) {
  deleteUserMealPreset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMealPresetMutationVariables,
  APITypes.DeleteUserMealPresetMutation
>;
export const updateDailyGoal = /* GraphQL */ `mutation UpdateDailyGoal(
  $condition: ModelDailyGoalConditionInput
  $input: UpdateDailyGoalInput!
) {
  updateDailyGoal(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateDailyGoalMutationVariables,
  APITypes.UpdateDailyGoalMutation
>;
export const updateDailyMealRecord = /* GraphQL */ `mutation UpdateDailyMealRecord(
  $condition: ModelDailyMealRecordConditionInput
  $input: UpdateDailyMealRecordInput!
) {
  updateDailyMealRecord(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateDailyMealRecordMutationVariables,
  APITypes.UpdateDailyMealRecordMutation
>;
export const updateUserMealPreset = /* GraphQL */ `mutation UpdateUserMealPreset(
  $condition: ModelUserMealPresetConditionInput
  $input: UpdateUserMealPresetInput!
) {
  updateUserMealPreset(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMealPresetMutationVariables,
  APITypes.UpdateUserMealPresetMutation
>;
