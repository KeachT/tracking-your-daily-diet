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


export type FoodItemInput = {
  id: string,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
};

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

export type FoodItem = {
  __typename: "FoodItem",
  id: string,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
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
