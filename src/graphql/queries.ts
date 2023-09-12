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
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
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
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDailyGoals = /* GraphQL */ `
  query SyncDailyGoals(
    $filter: ModelDailyGoalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDailyGoals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMealDate = /* GraphQL */ `
  query GetMealDate($id: ID!) {
    getMealDate(id: $id) {
      id
      date
      mealCategories {
        items {
          id
          name
          mealdateID
          foods {
            items {
              id
              name
              calories
              protein
              carbohydrates
              fat
              mealcategoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
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
        nextToken
        startedAt
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
          items {
            id
            name
            mealdateID
            foods {
              items {
                id
                name
                calories
                protein
                carbohydrates
                fat
                mealcategoryID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
                __typename
              }
              nextToken
              startedAt
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
          nextToken
          startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMealDates = /* GraphQL */ `
  query SyncMealDates(
    $filter: ModelMealDateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMealDates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        mealCategories {
          items {
            id
            name
            mealdateID
            foods {
              items {
                id
                name
                calories
                protein
                carbohydrates
                fat
                mealcategoryID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
                __typename
              }
              nextToken
              startedAt
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
          nextToken
          startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMealCategory = /* GraphQL */ `
  query GetMealCategory($id: ID!) {
    getMealCategory(id: $id) {
      id
      name
      mealdateID
      foods {
        items {
          id
          name
          calories
          protein
          carbohydrates
          fat
          mealcategoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
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
        mealdateID
        foods {
          items {
            id
            name
            calories
            protein
            carbohydrates
            fat
            mealcategoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMealCategories = /* GraphQL */ `
  query SyncMealCategories(
    $filter: ModelMealCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMealCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        mealdateID
        foods {
          items {
            id
            name
            calories
            protein
            carbohydrates
            fat
            mealcategoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const mealCategoriesByMealdateID = /* GraphQL */ `
  query MealCategoriesByMealdateID(
    $mealdateID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMealCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mealCategoriesByMealdateID(
      mealdateID: $mealdateID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        mealdateID
        foods {
          items {
            id
            name
            calories
            protein
            carbohydrates
            fat
            mealcategoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
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
      nextToken
      startedAt
      __typename
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
      mealcategoryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
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
        mealcategoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFoods = /* GraphQL */ `
  query SyncFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFoods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        calories
        protein
        carbohydrates
        fat
        mealcategoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const foodsByMealcategoryID = /* GraphQL */ `
  query FoodsByMealcategoryID(
    $mealcategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    foodsByMealcategoryID(
      mealcategoryID: $mealcategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        calories
        protein
        carbohydrates
        fat
        mealcategoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
