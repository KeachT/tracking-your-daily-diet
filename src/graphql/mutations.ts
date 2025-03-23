/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDailyGoal = /* GraphQL */ `mutation CreateDailyGoal(
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
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDailyGoalMutationVariables,
  APITypes.CreateDailyGoalMutation
>;
export const updateDailyGoal = /* GraphQL */ `mutation UpdateDailyGoal(
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
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDailyGoalMutationVariables,
  APITypes.UpdateDailyGoalMutation
>;
export const deleteDailyGoal = /* GraphQL */ `mutation DeleteDailyGoal(
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
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDailyGoalMutationVariables,
  APITypes.DeleteDailyGoalMutation
>;
export const createMealRecord = /* GraphQL */ `mutation CreateMealRecord(
  $input: CreateMealRecordInput!
  $condition: ModelMealRecordConditionInput
) {
  createMealRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMealRecordMutationVariables,
  APITypes.CreateMealRecordMutation
>;
export const updateMealRecord = /* GraphQL */ `mutation UpdateMealRecord(
  $input: UpdateMealRecordInput!
  $condition: ModelMealRecordConditionInput
) {
  updateMealRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMealRecordMutationVariables,
  APITypes.UpdateMealRecordMutation
>;
export const deleteMealRecord = /* GraphQL */ `mutation DeleteMealRecord(
  $input: DeleteMealRecordInput!
  $condition: ModelMealRecordConditionInput
) {
  deleteMealRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMealRecordMutationVariables,
  APITypes.DeleteMealRecordMutation
>;
export const createUserMealPreset = /* GraphQL */ `mutation CreateUserMealPreset(
  $input: CreateUserMealPresetInput!
  $condition: ModelUserMealPresetConditionInput
) {
  createUserMealPreset(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMealPresetMutationVariables,
  APITypes.CreateUserMealPresetMutation
>;
export const updateUserMealPreset = /* GraphQL */ `mutation UpdateUserMealPreset(
  $input: UpdateUserMealPresetInput!
  $condition: ModelUserMealPresetConditionInput
) {
  updateUserMealPreset(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMealPresetMutationVariables,
  APITypes.UpdateUserMealPresetMutation
>;
export const deleteUserMealPreset = /* GraphQL */ `mutation DeleteUserMealPreset(
  $input: DeleteUserMealPresetInput!
  $condition: ModelUserMealPresetConditionInput
) {
  deleteUserMealPreset(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMealPresetMutationVariables,
  APITypes.DeleteUserMealPresetMutation
>;
