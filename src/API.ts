/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDailyGoalInput = {
  id?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
};

export type ModelDailyGoalConditionInput = {
  calories?: ModelFloatInput | null,
  protein?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  and?: Array< ModelDailyGoalConditionInput | null > | null,
  or?: Array< ModelDailyGoalConditionInput | null > | null,
  not?: ModelDailyGoalConditionInput | null,
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


export type DailyGoal = {
  __typename: "DailyGoal",
  id: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateDailyGoalInput = {
  id: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
};

export type DeleteDailyGoalInput = {
  id: string,
};

export type CreateMealDateInput = {
  id?: string | null,
  date: string,
};

export type ModelMealDateConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelMealDateConditionInput | null > | null,
  or?: Array< ModelMealDateConditionInput | null > | null,
  not?: ModelMealDateConditionInput | null,
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

export type MealDate = {
  __typename: "MealDate",
  id: string,
  date: string,
  mealCategories?: ModelMealCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelMealCategoryConnection = {
  __typename: "ModelMealCategoryConnection",
  items:  Array<MealCategory | null >,
  nextToken?: string | null,
};

export type MealCategory = {
  __typename: "MealCategory",
  id: string,
  name: MealCategoryName,
  mealdateID: string,
  foods?: ModelFoodConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum MealCategoryName {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SNACK = "SNACK",
}


export type ModelFoodConnection = {
  __typename: "ModelFoodConnection",
  items:  Array<Food | null >,
  nextToken?: string | null,
};

export type Food = {
  __typename: "Food",
  id: string,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  mealcategoryID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateMealDateInput = {
  id: string,
  date?: string | null,
};

export type DeleteMealDateInput = {
  id: string,
};

export type CreateMealCategoryInput = {
  id?: string | null,
  name: MealCategoryName,
  mealdateID: string,
};

export type ModelMealCategoryConditionInput = {
  name?: ModelMealCategoryNameInput | null,
  mealdateID?: ModelIDInput | null,
  and?: Array< ModelMealCategoryConditionInput | null > | null,
  or?: Array< ModelMealCategoryConditionInput | null > | null,
  not?: ModelMealCategoryConditionInput | null,
};

export type ModelMealCategoryNameInput = {
  eq?: MealCategoryName | null,
  ne?: MealCategoryName | null,
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

export type UpdateMealCategoryInput = {
  id: string,
  name?: MealCategoryName | null,
  mealdateID?: string | null,
};

export type DeleteMealCategoryInput = {
  id: string,
};

export type CreateFoodInput = {
  id?: string | null,
  name: string,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  mealcategoryID: string,
};

export type ModelFoodConditionInput = {
  name?: ModelStringInput | null,
  calories?: ModelFloatInput | null,
  protein?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  mealcategoryID?: ModelIDInput | null,
  and?: Array< ModelFoodConditionInput | null > | null,
  or?: Array< ModelFoodConditionInput | null > | null,
  not?: ModelFoodConditionInput | null,
};

export type UpdateFoodInput = {
  id: string,
  name?: string | null,
  calories?: number | null,
  protein?: number | null,
  carbohydrates?: number | null,
  fat?: number | null,
  mealcategoryID?: string | null,
};

export type DeleteFoodInput = {
  id: string,
};

export type ModelDailyGoalFilterInput = {
  id?: ModelIDInput | null,
  calories?: ModelFloatInput | null,
  protein?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  and?: Array< ModelDailyGoalFilterInput | null > | null,
  or?: Array< ModelDailyGoalFilterInput | null > | null,
  not?: ModelDailyGoalFilterInput | null,
};

export type ModelDailyGoalConnection = {
  __typename: "ModelDailyGoalConnection",
  items:  Array<DailyGoal | null >,
  nextToken?: string | null,
};

export type ModelMealDateFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelMealDateFilterInput | null > | null,
  or?: Array< ModelMealDateFilterInput | null > | null,
  not?: ModelMealDateFilterInput | null,
};

export type ModelMealDateConnection = {
  __typename: "ModelMealDateConnection",
  items:  Array<MealDate | null >,
  nextToken?: string | null,
};

export type ModelMealCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelMealCategoryNameInput | null,
  mealdateID?: ModelIDInput | null,
  and?: Array< ModelMealCategoryFilterInput | null > | null,
  or?: Array< ModelMealCategoryFilterInput | null > | null,
  not?: ModelMealCategoryFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFoodFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  calories?: ModelFloatInput | null,
  protein?: ModelFloatInput | null,
  carbohydrates?: ModelFloatInput | null,
  fat?: ModelFloatInput | null,
  mealcategoryID?: ModelIDInput | null,
  and?: Array< ModelFoodFilterInput | null > | null,
  or?: Array< ModelFoodFilterInput | null > | null,
  not?: ModelFoodFilterInput | null,
};

export type ModelSubscriptionDailyGoalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  calories?: ModelSubscriptionFloatInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  carbohydrates?: ModelSubscriptionFloatInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
  or?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
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

export type ModelSubscriptionMealDateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMealDateFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealDateFilterInput | null > | null,
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

export type ModelSubscriptionMealCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  mealdateID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMealCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionMealCategoryFilterInput | null > | null,
};

export type ModelSubscriptionFoodFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  calories?: ModelSubscriptionFloatInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  carbohydrates?: ModelSubscriptionFloatInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  mealcategoryID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFoodFilterInput | null > | null,
  or?: Array< ModelSubscriptionFoodFilterInput | null > | null,
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
    owner?: string | null,
  } | null,
};

export type CreateMealDateMutationVariables = {
  input: CreateMealDateInput,
  condition?: ModelMealDateConditionInput | null,
};

export type CreateMealDateMutation = {
  createMealDate?:  {
    __typename: "MealDate",
    id: string,
    date: string,
    mealCategories?:  {
      __typename: "ModelMealCategoryConnection",
      items:  Array< {
        __typename: "MealCategory",
        id: string,
        name: MealCategoryName,
        mealdateID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMealDateMutationVariables = {
  input: UpdateMealDateInput,
  condition?: ModelMealDateConditionInput | null,
};

export type UpdateMealDateMutation = {
  updateMealDate?:  {
    __typename: "MealDate",
    id: string,
    date: string,
    mealCategories?:  {
      __typename: "ModelMealCategoryConnection",
      items:  Array< {
        __typename: "MealCategory",
        id: string,
        name: MealCategoryName,
        mealdateID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMealDateMutationVariables = {
  input: DeleteMealDateInput,
  condition?: ModelMealDateConditionInput | null,
};

export type DeleteMealDateMutation = {
  deleteMealDate?:  {
    __typename: "MealDate",
    id: string,
    date: string,
    mealCategories?:  {
      __typename: "ModelMealCategoryConnection",
      items:  Array< {
        __typename: "MealCategory",
        id: string,
        name: MealCategoryName,
        mealdateID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMealCategoryMutationVariables = {
  input: CreateMealCategoryInput,
  condition?: ModelMealCategoryConditionInput | null,
};

export type CreateMealCategoryMutation = {
  createMealCategory?:  {
    __typename: "MealCategory",
    id: string,
    name: MealCategoryName,
    mealdateID: string,
    foods?:  {
      __typename: "ModelFoodConnection",
      items:  Array< {
        __typename: "Food",
        id: string,
        name: string,
        calories?: number | null,
        protein?: number | null,
        carbohydrates?: number | null,
        fat?: number | null,
        mealcategoryID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMealCategoryMutationVariables = {
  input: UpdateMealCategoryInput,
  condition?: ModelMealCategoryConditionInput | null,
};

export type UpdateMealCategoryMutation = {
  updateMealCategory?:  {
    __typename: "MealCategory",
    id: string,
    name: MealCategoryName,
    mealdateID: string,
    foods?:  {
      __typename: "ModelFoodConnection",
      items:  Array< {
        __typename: "Food",
        id: string,
        name: string,
        calories?: number | null,
        protein?: number | null,
        carbohydrates?: number | null,
        fat?: number | null,
        mealcategoryID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMealCategoryMutationVariables = {
  input: DeleteMealCategoryInput,
  condition?: ModelMealCategoryConditionInput | null,
};

export type DeleteMealCategoryMutation = {
  deleteMealCategory?:  {
    __typename: "MealCategory",
    id: string,
    name: MealCategoryName,
    mealdateID: string,
    foods?:  {
      __typename: "ModelFoodConnection",
      items:  Array< {
        __typename: "Food",
        id: string,
        name: string,
        calories?: number | null,
        protein?: number | null,
        carbohydrates?: number | null,
        fat?: number | null,
        mealcategoryID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFoodMutationVariables = {
  input: CreateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type CreateFoodMutation = {
  createFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    mealcategoryID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFoodMutationVariables = {
  input: UpdateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type UpdateFoodMutation = {
  updateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    mealcategoryID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFoodMutationVariables = {
  input: DeleteFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type DeleteFoodMutation = {
  deleteFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    mealcategoryID: string,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMealDateQueryVariables = {
  id: string,
};

export type GetMealDateQuery = {
  getMealDate?:  {
    __typename: "MealDate",
    id: string,
    date: string,
    mealCategories?:  {
      __typename: "ModelMealCategoryConnection",
      items:  Array< {
        __typename: "MealCategory",
        id: string,
        name: MealCategoryName,
        mealdateID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMealDatesQueryVariables = {
  filter?: ModelMealDateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealDatesQuery = {
  listMealDates?:  {
    __typename: "ModelMealDateConnection",
    items:  Array< {
      __typename: "MealDate",
      id: string,
      date: string,
      mealCategories?:  {
        __typename: "ModelMealCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMealCategoryQueryVariables = {
  id: string,
};

export type GetMealCategoryQuery = {
  getMealCategory?:  {
    __typename: "MealCategory",
    id: string,
    name: MealCategoryName,
    mealdateID: string,
    foods?:  {
      __typename: "ModelFoodConnection",
      items:  Array< {
        __typename: "Food",
        id: string,
        name: string,
        calories?: number | null,
        protein?: number | null,
        carbohydrates?: number | null,
        fat?: number | null,
        mealcategoryID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMealCategoriesQueryVariables = {
  filter?: ModelMealCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMealCategoriesQuery = {
  listMealCategories?:  {
    __typename: "ModelMealCategoryConnection",
    items:  Array< {
      __typename: "MealCategory",
      id: string,
      name: MealCategoryName,
      mealdateID: string,
      foods?:  {
        __typename: "ModelFoodConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MealCategoriesByMealdateIDQueryVariables = {
  mealdateID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMealCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MealCategoriesByMealdateIDQuery = {
  mealCategoriesByMealdateID?:  {
    __typename: "ModelMealCategoryConnection",
    items:  Array< {
      __typename: "MealCategory",
      id: string,
      name: MealCategoryName,
      mealdateID: string,
      foods?:  {
        __typename: "ModelFoodConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFoodQueryVariables = {
  id: string,
};

export type GetFoodQuery = {
  getFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    mealcategoryID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFoodsQueryVariables = {
  filter?: ModelFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodsQuery = {
  listFoods?:  {
    __typename: "ModelFoodConnection",
    items:  Array< {
      __typename: "Food",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      mealcategoryID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FoodsByMealcategoryIDQueryVariables = {
  mealcategoryID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FoodsByMealcategoryIDQuery = {
  foodsByMealcategoryID?:  {
    __typename: "ModelFoodConnection",
    items:  Array< {
      __typename: "Food",
      id: string,
      name: string,
      calories?: number | null,
      protein?: number | null,
      carbohydrates?: number | null,
      fat?: number | null,
      mealcategoryID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnCreateMealDateSubscriptionVariables = {
  filter?: ModelSubscriptionMealDateFilterInput | null,
  owner?: string | null,
};

export type OnCreateMealDateSubscription = {
  onCreateMealDate?:  {
    __typename: "MealDate",
    id: string,
    date: string,
    mealCategories?:  {
      __typename: "ModelMealCategoryConnection",
      items:  Array< {
        __typename: "MealCategory",
        id: string,
        name: MealCategoryName,
        mealdateID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMealDateSubscriptionVariables = {
  filter?: ModelSubscriptionMealDateFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMealDateSubscription = {
  onUpdateMealDate?:  {
    __typename: "MealDate",
    id: string,
    date: string,
    mealCategories?:  {
      __typename: "ModelMealCategoryConnection",
      items:  Array< {
        __typename: "MealCategory",
        id: string,
        name: MealCategoryName,
        mealdateID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMealDateSubscriptionVariables = {
  filter?: ModelSubscriptionMealDateFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMealDateSubscription = {
  onDeleteMealDate?:  {
    __typename: "MealDate",
    id: string,
    date: string,
    mealCategories?:  {
      __typename: "ModelMealCategoryConnection",
      items:  Array< {
        __typename: "MealCategory",
        id: string,
        name: MealCategoryName,
        mealdateID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMealCategorySubscriptionVariables = {
  filter?: ModelSubscriptionMealCategoryFilterInput | null,
  owner?: string | null,
};

export type OnCreateMealCategorySubscription = {
  onCreateMealCategory?:  {
    __typename: "MealCategory",
    id: string,
    name: MealCategoryName,
    mealdateID: string,
    foods?:  {
      __typename: "ModelFoodConnection",
      items:  Array< {
        __typename: "Food",
        id: string,
        name: string,
        calories?: number | null,
        protein?: number | null,
        carbohydrates?: number | null,
        fat?: number | null,
        mealcategoryID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMealCategorySubscriptionVariables = {
  filter?: ModelSubscriptionMealCategoryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMealCategorySubscription = {
  onUpdateMealCategory?:  {
    __typename: "MealCategory",
    id: string,
    name: MealCategoryName,
    mealdateID: string,
    foods?:  {
      __typename: "ModelFoodConnection",
      items:  Array< {
        __typename: "Food",
        id: string,
        name: string,
        calories?: number | null,
        protein?: number | null,
        carbohydrates?: number | null,
        fat?: number | null,
        mealcategoryID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMealCategorySubscriptionVariables = {
  filter?: ModelSubscriptionMealCategoryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMealCategorySubscription = {
  onDeleteMealCategory?:  {
    __typename: "MealCategory",
    id: string,
    name: MealCategoryName,
    mealdateID: string,
    foods?:  {
      __typename: "ModelFoodConnection",
      items:  Array< {
        __typename: "Food",
        id: string,
        name: string,
        calories?: number | null,
        protein?: number | null,
        carbohydrates?: number | null,
        fat?: number | null,
        mealcategoryID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFoodSubscriptionVariables = {
  filter?: ModelSubscriptionFoodFilterInput | null,
  owner?: string | null,
};

export type OnCreateFoodSubscription = {
  onCreateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    mealcategoryID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFoodSubscriptionVariables = {
  filter?: ModelSubscriptionFoodFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFoodSubscription = {
  onUpdateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    mealcategoryID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFoodSubscriptionVariables = {
  filter?: ModelSubscriptionFoodFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFoodSubscription = {
  onDeleteFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    calories?: number | null,
    protein?: number | null,
    carbohydrates?: number | null,
    fat?: number | null,
    mealcategoryID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
