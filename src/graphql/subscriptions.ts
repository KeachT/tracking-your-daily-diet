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
export const onCreateDailyMealRecord = /* GraphQL */ `subscription OnCreateDailyMealRecord(
  $filter: ModelSubscriptionDailyMealRecordFilterInput
  $owner: String
) {
  onCreateDailyMealRecord(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDailyMealRecordSubscriptionVariables,
  APITypes.OnCreateDailyMealRecordSubscription
>;
export const onUpdateDailyMealRecord = /* GraphQL */ `subscription OnUpdateDailyMealRecord(
  $filter: ModelSubscriptionDailyMealRecordFilterInput
  $owner: String
) {
  onUpdateDailyMealRecord(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDailyMealRecordSubscriptionVariables,
  APITypes.OnUpdateDailyMealRecordSubscription
>;
export const onDeleteDailyMealRecord = /* GraphQL */ `subscription OnDeleteDailyMealRecord(
  $filter: ModelSubscriptionDailyMealRecordFilterInput
  $owner: String
) {
  onDeleteDailyMealRecord(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDailyMealRecordSubscriptionVariables,
  APITypes.OnDeleteDailyMealRecordSubscription
>;
export const onCreateUserMealPreset = /* GraphQL */ `subscription OnCreateUserMealPreset(
  $filter: ModelSubscriptionUserMealPresetFilterInput
  $owner: String
) {
  onCreateUserMealPreset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserMealPresetSubscriptionVariables,
  APITypes.OnCreateUserMealPresetSubscription
>;
export const onUpdateUserMealPreset = /* GraphQL */ `subscription OnUpdateUserMealPreset(
  $filter: ModelSubscriptionUserMealPresetFilterInput
  $owner: String
) {
  onUpdateUserMealPreset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserMealPresetSubscriptionVariables,
  APITypes.OnUpdateUserMealPresetSubscription
>;
export const onDeleteUserMealPreset = /* GraphQL */ `subscription OnDeleteUserMealPreset(
  $filter: ModelSubscriptionUserMealPresetFilterInput
  $owner: String
) {
  onDeleteUserMealPreset(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserMealPresetSubscriptionVariables,
  APITypes.OnDeleteUserMealPresetSubscription
>;
