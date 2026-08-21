/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DailyGoal = {
  __typename: "DailyGoal",
  calories?: number | null,
  carbohydrates?: number | null,
  createdAt: string,
  fat?: number | null,
  id: string,
  owner?: string | null,
  protein?: number | null,
  updatedAt: string,
};

export type DailyMealRecord = {
  __typename: "DailyMealRecord",
  breakfast?:  Array<FoodItem | null > | null,
  createdAt: string,
  date: string,
  dinner?:  Array<FoodItem | null > | null,
  id: string,
  lunch?:  Array<FoodItem | null > | null,
  owner?: string | null,
  snack?:  Array<FoodItem | null > | null,
  updatedAt: string,
};

export type FoodItem = {
  __typename: "FoodItem",
  calories?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  id: string,
  name: string,
  protein?: number | null,
};

export type UserMealPreset = {
  __typename: "UserMealPreset",
  breakfast?:  Array<FoodItem | null > | null,
  createdAt: string,
  dinner?:  Array<FoodItem | null > | null,
  id: string,
  lunch?:  Array<FoodItem | null > | null,
  name?: string | null,
  owner?: string | null,
  snack?:  Array<FoodItem | null > | null,
  updatedAt: string,
};

export type ModelDailyGoalFilterInput = {
  and?: Array< ModelDailyGoalFilterInput | null > | null,
  calories?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  fat?: ModelFloatInput | null,
  id?: ModelIDInput | null,
  not?: ModelDailyGoalFilterInput | null,
  or?: Array< ModelDailyGoalFilterInput | null > | null,
  owner?: ModelStringInput | null,
  protein?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelDailyGoalConnection = {
  __typename: "ModelDailyGoalConnection",
  items:  Array<DailyGoal | null >,
  nextToken?: string | null,
};

export type ModelDailyMealRecordFilterInput = {
  and?: Array< ModelDailyMealRecordFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelDailyMealRecordFilterInput | null,
  or?: Array< ModelDailyMealRecordFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelDailyMealRecordConnection = {
  __typename: "ModelDailyMealRecordConnection",
  items:  Array<DailyMealRecord | null >,
  nextToken?: string | null,
};

export type ModelUserMealPresetFilterInput = {
  and?: Array< ModelUserMealPresetFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserMealPresetFilterInput | null,
  or?: Array< ModelUserMealPresetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserMealPresetConnection = {
  __typename: "ModelUserMealPresetConnection",
  items:  Array<UserMealPreset | null >,
  nextToken?: string | null,
};

export type ModelDailyGoalConditionInput = {
  and?: Array< ModelDailyGoalConditionInput | null > | null,
  calories?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  fat?: ModelFloatInput | null,
  not?: ModelDailyGoalConditionInput | null,
  or?: Array< ModelDailyGoalConditionInput | null > | null,
  owner?: ModelStringInput | null,
  protein?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateDailyGoalInput = {
  calories?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  id?: string | null,
  protein?: number | null,
};

export type ModelDailyMealRecordConditionInput = {
  and?: Array< ModelDailyMealRecordConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  not?: ModelDailyMealRecordConditionInput | null,
  or?: Array< ModelDailyMealRecordConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateDailyMealRecordInput = {
  breakfast?: Array< FoodItemInput | null > | null,
  date: string,
  dinner?: Array< FoodItemInput | null > | null,
  id?: string | null,
  lunch?: Array< FoodItemInput | null > | null,
  snack?: Array< FoodItemInput | null > | null,
};

export type FoodItemInput = {
  calories?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  id: string,
  name: string,
  protein?: number | null,
};

export type ModelUserMealPresetConditionInput = {
  and?: Array< ModelUserMealPresetConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserMealPresetConditionInput | null,
  or?: Array< ModelUserMealPresetConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserMealPresetInput = {
  breakfast?: Array< FoodItemInput | null > | null,
  dinner?: Array< FoodItemInput | null > | null,
  id?: string | null,
  lunch?: Array< FoodItemInput | null > | null,
  name?: string | null,
  snack?: Array< FoodItemInput | null > | null,
};

export type DeleteDailyGoalInput = {
  id: string,
};

export type DeleteDailyMealRecordInput = {
  id: string,
};

export type DeleteUserMealPresetInput = {
  id: string,
};

export type UpdateDailyGoalInput = {
  calories?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  id: string,
  protein?: number | null,
};

export type UpdateDailyMealRecordInput = {
  breakfast?: Array< FoodItemInput | null > | null,
  date?: string | null,
  dinner?: Array< FoodItemInput | null > | null,
  id: string,
  lunch?: Array< FoodItemInput | null > | null,
  snack?: Array< FoodItemInput | null > | null,
};

export type UpdateUserMealPresetInput = {
  breakfast?: Array< FoodItemInput | null > | null,
  dinner?: Array< FoodItemInput | null > | null,
  id: string,
  lunch?: Array< FoodItemInput | null > | null,
  name?: string | null,
  snack?: Array< FoodItemInput | null > | null,
};

export type ModelSubscriptionDailyGoalFilterInput = {
  and?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
  calories?: ModelSubscriptionFloatInput | null,
  carbohydrates?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
  owner?: ModelStringInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionDailyMealRecordFilterInput = {
  and?: Array< ModelSubscriptionDailyMealRecordFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionDailyMealRecordFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserMealPresetFilterInput = {
  and?: Array< ModelSubscriptionUserMealPresetFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserMealPresetFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetDailyGoalQueryVariables = {
  id: string,
};

export type GetDailyGoalQuery = {
  getDailyGoal?:  {
    __typename: "DailyGoal",
    calories?: number | null,
    carbohydrates?: number | null,
    createdAt: string,
    fat?: number | null,
    id: string,
    owner?: string | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type GetDailyMealRecordQueryVariables = {
  id: string,
};

export type GetDailyMealRecordQuery = {
  getDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    date: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type GetUserMealPresetQueryVariables = {
  id: string,
};

export type GetUserMealPresetQuery = {
  getUserMealPreset?:  {
    __typename: "UserMealPreset",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    name?: string | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type ListDailyGoalsQueryVariables = {
  filter?: ModelDailyGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDailyGoalsQuery = {
  listDailyGoals?:  {
    __typename: "ModelDailyGoalConnection",
    items:  Array< {
      __typename: "DailyGoal",
      calories?: number | null,
      carbohydrates?: number | null,
      createdAt: string,
      fat?: number | null,
      id: string,
      owner?: string | null,
      protein?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListDailyMealRecordsQueryVariables = {
  filter?: ModelDailyMealRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDailyMealRecordsQuery = {
  listDailyMealRecords?:  {
    __typename: "ModelDailyMealRecordConnection",
    items:  Array< {
      __typename: "DailyMealRecord",
      createdAt: string,
      date: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserMealPresetsQueryVariables = {
  filter?: ModelUserMealPresetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserMealPresetsQuery = {
  listUserMealPresets?:  {
    __typename: "ModelUserMealPresetConnection",
    items:  Array< {
      __typename: "UserMealPreset",
      createdAt: string,
      id: string,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateDailyGoalMutationVariables = {
  condition?: ModelDailyGoalConditionInput | null,
  input: CreateDailyGoalInput,
};

export type CreateDailyGoalMutation = {
  createDailyGoal?:  {
    __typename: "DailyGoal",
    calories?: number | null,
    carbohydrates?: number | null,
    createdAt: string,
    fat?: number | null,
    id: string,
    owner?: string | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateDailyMealRecordMutationVariables = {
  condition?: ModelDailyMealRecordConditionInput | null,
  input: CreateDailyMealRecordInput,
};

export type CreateDailyMealRecordMutation = {
  createDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    date: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMealPresetMutationVariables = {
  condition?: ModelUserMealPresetConditionInput | null,
  input: CreateUserMealPresetInput,
};

export type CreateUserMealPresetMutation = {
  createUserMealPreset?:  {
    __typename: "UserMealPreset",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    name?: string | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteDailyGoalMutationVariables = {
  condition?: ModelDailyGoalConditionInput | null,
  input: DeleteDailyGoalInput,
};

export type DeleteDailyGoalMutation = {
  deleteDailyGoal?:  {
    __typename: "DailyGoal",
    calories?: number | null,
    carbohydrates?: number | null,
    createdAt: string,
    fat?: number | null,
    id: string,
    owner?: string | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteDailyMealRecordMutationVariables = {
  condition?: ModelDailyMealRecordConditionInput | null,
  input: DeleteDailyMealRecordInput,
};

export type DeleteDailyMealRecordMutation = {
  deleteDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    date: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMealPresetMutationVariables = {
  condition?: ModelUserMealPresetConditionInput | null,
  input: DeleteUserMealPresetInput,
};

export type DeleteUserMealPresetMutation = {
  deleteUserMealPreset?:  {
    __typename: "UserMealPreset",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    name?: string | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateDailyGoalMutationVariables = {
  condition?: ModelDailyGoalConditionInput | null,
  input: UpdateDailyGoalInput,
};

export type UpdateDailyGoalMutation = {
  updateDailyGoal?:  {
    __typename: "DailyGoal",
    calories?: number | null,
    carbohydrates?: number | null,
    createdAt: string,
    fat?: number | null,
    id: string,
    owner?: string | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateDailyMealRecordMutationVariables = {
  condition?: ModelDailyMealRecordConditionInput | null,
  input: UpdateDailyMealRecordInput,
};

export type UpdateDailyMealRecordMutation = {
  updateDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    date: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMealPresetMutationVariables = {
  condition?: ModelUserMealPresetConditionInput | null,
  input: UpdateUserMealPresetInput,
};

export type UpdateUserMealPresetMutation = {
  updateUserMealPreset?:  {
    __typename: "UserMealPreset",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    name?: string | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateDailyGoalSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalFilterInput | null,
  owner?: string | null,
};

export type OnCreateDailyGoalSubscription = {
  onCreateDailyGoal?:  {
    __typename: "DailyGoal",
    calories?: number | null,
    carbohydrates?: number | null,
    createdAt: string,
    fat?: number | null,
    id: string,
    owner?: string | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateDailyMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionDailyMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnCreateDailyMealRecordSubscription = {
  onCreateDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    date: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserMealPresetSubscriptionVariables = {
  filter?: ModelSubscriptionUserMealPresetFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserMealPresetSubscription = {
  onCreateUserMealPreset?:  {
    __typename: "UserMealPreset",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    name?: string | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteDailyGoalSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDailyGoalSubscription = {
  onDeleteDailyGoal?:  {
    __typename: "DailyGoal",
    calories?: number | null,
    carbohydrates?: number | null,
    createdAt: string,
    fat?: number | null,
    id: string,
    owner?: string | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteDailyMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionDailyMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDailyMealRecordSubscription = {
  onDeleteDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    date: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserMealPresetSubscriptionVariables = {
  filter?: ModelSubscriptionUserMealPresetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserMealPresetSubscription = {
  onDeleteUserMealPreset?:  {
    __typename: "UserMealPreset",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    name?: string | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateDailyGoalSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDailyGoalSubscription = {
  onUpdateDailyGoal?:  {
    __typename: "DailyGoal",
    calories?: number | null,
    carbohydrates?: number | null,
    createdAt: string,
    fat?: number | null,
    id: string,
    owner?: string | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateDailyMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionDailyMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDailyMealRecordSubscription = {
  onUpdateDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    date: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserMealPresetSubscriptionVariables = {
  filter?: ModelSubscriptionUserMealPresetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserMealPresetSubscription = {
  onUpdateUserMealPreset?:  {
    __typename: "UserMealPreset",
    breakfast?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    createdAt: string,
    dinner?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    id: string,
    lunch?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    name?: string | null,
    owner?: string | null,
    snack?:  Array< {
      __typename: "FoodItem",
      calories?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      id: string,
      name: string,
      protein?: number | null,
    } | null > | null,
    updatedAt: string,
  } | null,
};
