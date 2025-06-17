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
export const createDailyMealRecord = /* GraphQL */ `mutation CreateDailyMealRecord(
  $input: CreateDailyMealRecordInput!
  $condition: ModelDailyMealRecordConditionInput
) {
  createDailyMealRecord(input: $input, condition: $condition) {
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
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDailyMealRecordMutationVariables,
  APITypes.CreateDailyMealRecordMutation
>;
export const updateDailyMealRecord = /* GraphQL */ `mutation UpdateDailyMealRecord(
  $input: UpdateDailyMealRecordInput!
  $condition: ModelDailyMealRecordConditionInput
) {
  updateDailyMealRecord(input: $input, condition: $condition) {
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
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDailyMealRecordMutationVariables,
  APITypes.UpdateDailyMealRecordMutation
>;
export const deleteDailyMealRecord = /* GraphQL */ `mutation DeleteDailyMealRecord(
  $input: DeleteDailyMealRecordInput!
  $condition: ModelDailyMealRecordConditionInput
) {
  deleteDailyMealRecord(input: $input, condition: $condition) {
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
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDailyMealRecordMutationVariables,
  APITypes.DeleteDailyMealRecordMutation
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
