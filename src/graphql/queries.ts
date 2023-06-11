/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDailyGoal = /* GraphQL */ `
  query GetDailyGoal($id: ID!) {
    getDailyGoal(id: $id) {
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
export const listDailyGoals = /* GraphQL */ `
  query ListDailyGoals(
    $filter: ModelDailyGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        calories
        protein
        carbohydrates
        fat
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMealDate = /* GraphQL */ `
  query GetMealDate($id: ID!) {
    getMealDate(id: $id) {
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
export const listMealDates = /* GraphQL */ `
  query ListMealDates(
    $filter: ModelMealDateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMealDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        mealCategories {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMealCategory = /* GraphQL */ `
  query GetMealCategory($id: ID!) {
    getMealCategory(id: $id) {
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
export const listMealCategories = /* GraphQL */ `
  query ListMealCategories(
    $filter: ModelMealCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMealCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFood = /* GraphQL */ `
  query GetFood($id: ID!) {
    getFood(id: $id) {
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
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
