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
export const createMealDate = /* GraphQL */ `
  mutation CreateMealDate(
    $input: CreateMealDateInput!
    $condition: ModelMealDateConditionInput
  ) {
    createMealDate(input: $input, condition: $condition) {
      id
      date
      mealCategories {
        id
        name
        foods {
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMealDate = /* GraphQL */ `
  mutation UpdateMealDate(
    $input: UpdateMealDateInput!
    $condition: ModelMealDateConditionInput
  ) {
    updateMealDate(input: $input, condition: $condition) {
      id
      date
      mealCategories {
        id
        name
        foods {
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMealDate = /* GraphQL */ `
  mutation DeleteMealDate(
    $input: DeleteMealDateInput!
    $condition: ModelMealDateConditionInput
  ) {
    deleteMealDate(input: $input, condition: $condition) {
      id
      date
      mealCategories {
        id
        name
        foods {
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMealCategory = /* GraphQL */ `
  mutation CreateMealCategory(
    $input: CreateMealCategoryInput!
    $condition: ModelMealCategoryConditionInput
  ) {
    createMealCategory(input: $input, condition: $condition) {
      id
      name
      foods {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMealCategory = /* GraphQL */ `
  mutation UpdateMealCategory(
    $input: UpdateMealCategoryInput!
    $condition: ModelMealCategoryConditionInput
  ) {
    updateMealCategory(input: $input, condition: $condition) {
      id
      name
      foods {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMealCategory = /* GraphQL */ `
  mutation DeleteMealCategory(
    $input: DeleteMealCategoryInput!
    $condition: ModelMealCategoryConditionInput
  ) {
    deleteMealCategory(input: $input, condition: $condition) {
      id
      name
      foods {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFood = /* GraphQL */ `
  mutation CreateFood(
    $input: CreateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    createFood(input: $input, condition: $condition) {
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
export const updateFood = /* GraphQL */ `
  mutation UpdateFood(
    $input: UpdateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    updateFood(input: $input, condition: $condition) {
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
export const deleteFood = /* GraphQL */ `
  mutation DeleteFood(
    $input: DeleteFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    deleteFood(input: $input, condition: $condition) {
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
