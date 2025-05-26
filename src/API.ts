/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDailyGoalInput = {
  id?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  _version?: number | null,
};

export type ModelDailyGoalConditionInput = {
  calories?: ModelFloatInput | null,
  protein?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  and?: Array< ModelDailyGoalConditionInput | null > | null,
  or?: Array< ModelDailyGoalConditionInput | null > | null,
  not?: ModelDailyGoalConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type DailyGoal = {
  __typename: "DailyGoal",
  id: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateDailyGoalInput = {
  id: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  _version?: number | null,
};

export type DeleteDailyGoalInput = {
  id: string,
  _version?: number | null,
};

export type CreateDailyMealRecordInput = {
  id?: string | null,
  date: string,
  breakfast?: Array< FoodItemInput | null > | null,
  lunch?: Array< FoodItemInput | null > | null,
  dinner?: Array< FoodItemInput | null > | null,
  snack?: Array< FoodItemInput | null > | null,
  _version?: number | null,
};

export type FoodItemInput = {
  id: string,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
};

export type ModelDailyMealRecordConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelDailyMealRecordConditionInput | null > | null,
  or?: Array< ModelDailyMealRecordConditionInput | null > | null,
  not?: ModelDailyMealRecordConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type DailyMealRecord = {
  __typename: "DailyMealRecord",
  id: string,
  date: string,
  breakfast?:  Array<FoodItem | null > | null,
  lunch?:  Array<FoodItem | null > | null,
  dinner?:  Array<FoodItem | null > | null,
  snack?:  Array<FoodItem | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type FoodItem = {
  __typename: "FoodItem",
  id: string,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
};

export type UpdateDailyMealRecordInput = {
  id: string,
  date?: string | null,
  breakfast?: Array< FoodItemInput | null > | null,
  lunch?: Array< FoodItemInput | null > | null,
  dinner?: Array< FoodItemInput | null > | null,
  snack?: Array< FoodItemInput | null > | null,
  _version?: number | null,
};

export type DeleteDailyMealRecordInput = {
  id: string,
  _version?: number | null,
};

export type CreateMealRecordInput = {
  id?: string | null,
  date: string,
  category: MealCategoryName,
  foods?: Array< FoodItemInput | null > | null,
  _version?: number | null,
};

export enum MealCategoryName {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SNACK = "SNACK",
}


export type ModelMealRecordConditionInput = {
  date?: ModelStringInput | null,
  category?: ModelMealCategoryNameInput | null,
  and?: Array< ModelMealRecordConditionInput | null > | null,
  or?: Array< ModelMealRecordConditionInput | null > | null,
  not?: ModelMealRecordConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelMealCategoryNameInput = {
  eq?: MealCategoryName | null,
  ne?: MealCategoryName | null,
};

export type MealRecord = {
  __typename: "MealRecord",
  id: string,
  date: string,
  category: MealCategoryName,
  foods?:  Array<FoodItem | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateMealRecordInput = {
  id: string,
  date?: string | null,
  category?: MealCategoryName | null,
  foods?: Array< FoodItemInput | null > | null,
  _version?: number | null,
};

export type DeleteMealRecordInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserMealPresetInput = {
  id?: string | null,
  breakfast?: Array< FoodItemInput | null > | null,
  lunch?: Array< FoodItemInput | null > | null,
  dinner?: Array< FoodItemInput | null > | null,
  snack?: Array< FoodItemInput | null > | null,
  _version?: number | null,
};

export type ModelUserMealPresetConditionInput = {
  and?: Array< ModelUserMealPresetConditionInput | null > | null,
  or?: Array< ModelUserMealPresetConditionInput | null > | null,
  not?: ModelUserMealPresetConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UserMealPreset = {
  __typename: "UserMealPreset",
  id: string,
  breakfast?:  Array<FoodItem | null > | null,
  lunch?:  Array<FoodItem | null > | null,
  dinner?:  Array<FoodItem | null > | null,
  snack?:  Array<FoodItem | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateUserMealPresetInput = {
  id: string,
  breakfast?: Array< FoodItemInput | null > | null,
  lunch?: Array< FoodItemInput | null > | null,
  dinner?: Array< FoodItemInput | null > | null,
  snack?: Array< FoodItemInput | null > | null,
  _version?: number | null,
};

export type DeleteUserMealPresetInput = {
  id: string,
  _version?: number | null,
};

export type ModelDailyGoalFilterInput = {
  id?: ModelIDInput | null,
  calories?: ModelFloatInput | null,
  protein?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDailyGoalFilterInput | null > | null,
  or?: Array< ModelDailyGoalFilterInput | null > | null,
  not?: ModelDailyGoalFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDailyGoalConnection = {
  __typename: "ModelDailyGoalConnection",
  items:  Array<DailyGoal | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDailyMealRecordFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDailyMealRecordFilterInput | null > | null,
  or?: Array< ModelDailyMealRecordFilterInput | null > | null,
  not?: ModelDailyMealRecordFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelDailyMealRecordConnection = {
  __typename: "ModelDailyMealRecordConnection",
  items:  Array<DailyMealRecord | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMealRecordFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  category?: ModelMealCategoryNameInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMealRecordFilterInput | null > | null,
  or?: Array< ModelMealRecordFilterInput | null > | null,
  not?: ModelMealRecordFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelMealRecordConnection = {
  __typename: "ModelMealRecordConnection",
  items:  Array<MealRecord | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserMealPresetFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserMealPresetFilterInput | null > | null,
  or?: Array< ModelUserMealPresetFilterInput | null > | null,
  not?: ModelUserMealPresetFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserMealPresetConnection = {
  __typename: "ModelUserMealPresetConnection",
  items:  Array<UserMealPreset | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionDailyGoalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  calories?: ModelSubscriptionFloatInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  carbohydrates?: ModelSubscriptionFloatInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
  or?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionDailyMealRecordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDailyMealRecordFilterInput | null > | null,
  or?: Array< ModelSubscriptionDailyMealRecordFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionMealRecordFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMealRecordFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealRecordFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserMealPresetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserMealPresetFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserMealPresetFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type CreateDailyGoalMutationVariables = {
  input: CreateDailyGoalInput,
  condition?: ModelDailyGoalConditionInput | null,
};

export type CreateDailyGoalMutation = {
  createDailyGoal?:  {
    __typename: "DailyGoal",
    id: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateDailyGoalMutationVariables = {
  input: UpdateDailyGoalInput,
  condition?: ModelDailyGoalConditionInput | null,
};

export type UpdateDailyGoalMutation = {
  updateDailyGoal?:  {
    __typename: "DailyGoal",
    id: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteDailyGoalMutationVariables = {
  input: DeleteDailyGoalInput,
  condition?: ModelDailyGoalConditionInput | null,
};

export type DeleteDailyGoalMutation = {
  deleteDailyGoal?:  {
    __typename: "DailyGoal",
    id: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateDailyMealRecordMutationVariables = {
  input: CreateDailyMealRecordInput,
  condition?: ModelDailyMealRecordConditionInput | null,
};

export type CreateDailyMealRecordMutation = {
  createDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    id: string,
    date: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateDailyMealRecordMutationVariables = {
  input: UpdateDailyMealRecordInput,
  condition?: ModelDailyMealRecordConditionInput | null,
};

export type UpdateDailyMealRecordMutation = {
  updateDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    id: string,
    date: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteDailyMealRecordMutationVariables = {
  input: DeleteDailyMealRecordInput,
  condition?: ModelDailyMealRecordConditionInput | null,
};

export type DeleteDailyMealRecordMutation = {
  deleteDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    id: string,
    date: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateMealRecordMutationVariables = {
  input: CreateMealRecordInput,
  condition?: ModelMealRecordConditionInput | null,
};

export type CreateMealRecordMutation = {
  createMealRecord?:  {
    __typename: "MealRecord",
    id: string,
    date: string,
    category: MealCategoryName,
    foods?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateMealRecordMutationVariables = {
  input: UpdateMealRecordInput,
  condition?: ModelMealRecordConditionInput | null,
};

export type UpdateMealRecordMutation = {
  updateMealRecord?:  {
    __typename: "MealRecord",
    id: string,
    date: string,
    category: MealCategoryName,
    foods?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteMealRecordMutationVariables = {
  input: DeleteMealRecordInput,
  condition?: ModelMealRecordConditionInput | null,
};

export type DeleteMealRecordMutation = {
  deleteMealRecord?:  {
    __typename: "MealRecord",
    id: string,
    date: string,
    category: MealCategoryName,
    foods?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateUserMealPresetMutationVariables = {
  input: CreateUserMealPresetInput,
  condition?: ModelUserMealPresetConditionInput | null,
};

export type CreateUserMealPresetMutation = {
  createUserMealPreset?:  {
    __typename: "UserMealPreset",
    id: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserMealPresetMutationVariables = {
  input: UpdateUserMealPresetInput,
  condition?: ModelUserMealPresetConditionInput | null,
};

export type UpdateUserMealPresetMutation = {
  updateUserMealPreset?:  {
    __typename: "UserMealPreset",
    id: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserMealPresetMutationVariables = {
  input: DeleteUserMealPresetInput,
  condition?: ModelUserMealPresetConditionInput | null,
};

export type DeleteUserMealPresetMutation = {
  deleteUserMealPreset?:  {
    __typename: "UserMealPreset",
    id: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetDailyGoalQueryVariables = {
  id: string,
};

export type GetDailyGoalQuery = {
  getDailyGoal?:  {
    __typename: "DailyGoal",
    id: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      id: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDailyGoalsQueryVariables = {
  filter?: ModelDailyGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDailyGoalsQuery = {
  syncDailyGoals?:  {
    __typename: "ModelDailyGoalConnection",
    items:  Array< {
      __typename: "DailyGoal",
      id: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDailyMealRecordQueryVariables = {
  id: string,
};

export type GetDailyMealRecordQuery = {
  getDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    id: string,
    date: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      id: string,
      date: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDailyMealRecordsQueryVariables = {
  filter?: ModelDailyMealRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDailyMealRecordsQuery = {
  syncDailyMealRecords?:  {
    __typename: "ModelDailyMealRecordConnection",
    items:  Array< {
      __typename: "DailyMealRecord",
      id: string,
      date: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMealRecordQueryVariables = {
  id: string,
};

export type GetMealRecordQuery = {
  getMealRecord?:  {
    __typename: "MealRecord",
    id: string,
    date: string,
    category: MealCategoryName,
    foods?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListMealRecordsQueryVariables = {
  filter?: ModelMealRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealRecordsQuery = {
  listMealRecords?:  {
    __typename: "ModelMealRecordConnection",
    items:  Array< {
      __typename: "MealRecord",
      id: string,
      date: string,
      category: MealCategoryName,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMealRecordsQueryVariables = {
  filter?: ModelMealRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMealRecordsQuery = {
  syncMealRecords?:  {
    __typename: "ModelMealRecordConnection",
    items:  Array< {
      __typename: "MealRecord",
      id: string,
      date: string,
      category: MealCategoryName,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserMealPresetQueryVariables = {
  id: string,
};

export type GetUserMealPresetQuery = {
  getUserMealPreset?:  {
    __typename: "UserMealPreset",
    id: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserMealPresetsQueryVariables = {
  filter?: ModelUserMealPresetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserMealPresetsQuery = {
  syncUserMealPresets?:  {
    __typename: "ModelUserMealPresetConnection",
    items:  Array< {
      __typename: "UserMealPreset",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDailyGoalSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalFilterInput | null,
  owner?: string | null,
};

export type OnCreateDailyGoalSubscription = {
  onCreateDailyGoal?:  {
    __typename: "DailyGoal",
    id: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateDailyGoalSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDailyGoalSubscription = {
  onUpdateDailyGoal?:  {
    __typename: "DailyGoal",
    id: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteDailyGoalSubscriptionVariables = {
  filter?: ModelSubscriptionDailyGoalFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDailyGoalSubscription = {
  onDeleteDailyGoal?:  {
    __typename: "DailyGoal",
    id: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateDailyMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionDailyMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnCreateDailyMealRecordSubscription = {
  onCreateDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    id: string,
    date: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateDailyMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionDailyMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDailyMealRecordSubscription = {
  onUpdateDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    id: string,
    date: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteDailyMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionDailyMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDailyMealRecordSubscription = {
  onDeleteDailyMealRecord?:  {
    __typename: "DailyMealRecord",
    id: string,
    date: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnCreateMealRecordSubscription = {
  onCreateMealRecord?:  {
    __typename: "MealRecord",
    id: string,
    date: string,
    category: MealCategoryName,
    foods?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMealRecordSubscription = {
  onUpdateMealRecord?:  {
    __typename: "MealRecord",
    id: string,
    date: string,
    category: MealCategoryName,
    foods?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteMealRecordSubscriptionVariables = {
  filter?: ModelSubscriptionMealRecordFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMealRecordSubscription = {
  onDeleteMealRecord?:  {
    __typename: "MealRecord",
    id: string,
    date: string,
    category: MealCategoryName,
    foods?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateUserMealPresetSubscriptionVariables = {
  filter?: ModelSubscriptionUserMealPresetFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserMealPresetSubscription = {
  onCreateUserMealPreset?:  {
    __typename: "UserMealPreset",
    id: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserMealPresetSubscriptionVariables = {
  filter?: ModelSubscriptionUserMealPresetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserMealPresetSubscription = {
  onUpdateUserMealPreset?:  {
    __typename: "UserMealPreset",
    id: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserMealPresetSubscriptionVariables = {
  filter?: ModelSubscriptionUserMealPresetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserMealPresetSubscription = {
  onDeleteUserMealPreset?:  {
    __typename: "UserMealPreset",
    id: string,
    breakfast?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    lunch?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    dinner?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    snack?:  Array< {
      __typename: "FoodItem",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
