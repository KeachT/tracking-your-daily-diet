/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDailyGoal = /* GraphQL */ `
  subscription OnCreateDailyGoal(
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
`;
export const onUpdateDailyGoal = /* GraphQL */ `
  subscription OnUpdateDailyGoal(
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
`;
export const onDeleteDailyGoal = /* GraphQL */ `
  subscription OnDeleteDailyGoal(
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
`;
export const onCreateMealDate = /* GraphQL */ `
  subscription OnCreateMealDate(
    $filter: ModelSubscriptionMealDateFilterInput
    $owner: String
  ) {
    onCreateMealDate(filter: $filter, owner: $owner) {
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
export const onUpdateMealDate = /* GraphQL */ `
  subscription OnUpdateMealDate(
    $filter: ModelSubscriptionMealDateFilterInput
    $owner: String
  ) {
    onUpdateMealDate(filter: $filter, owner: $owner) {
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
export const onDeleteMealDate = /* GraphQL */ `
  subscription OnDeleteMealDate(
    $filter: ModelSubscriptionMealDateFilterInput
    $owner: String
  ) {
    onDeleteMealDate(filter: $filter, owner: $owner) {
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
export const onCreateMealCategory = /* GraphQL */ `
  subscription OnCreateMealCategory(
    $filter: ModelSubscriptionMealCategoryFilterInput
    $owner: String
  ) {
    onCreateMealCategory(filter: $filter, owner: $owner) {
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
export const onUpdateMealCategory = /* GraphQL */ `
  subscription OnUpdateMealCategory(
    $filter: ModelSubscriptionMealCategoryFilterInput
    $owner: String
  ) {
    onUpdateMealCategory(filter: $filter, owner: $owner) {
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
export const onDeleteMealCategory = /* GraphQL */ `
  subscription OnDeleteMealCategory(
    $filter: ModelSubscriptionMealCategoryFilterInput
    $owner: String
  ) {
    onDeleteMealCategory(filter: $filter, owner: $owner) {
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
export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood(
    $filter: ModelSubscriptionFoodFilterInput
    $owner: String
  ) {
    onCreateFood(filter: $filter, owner: $owner) {
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
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood(
    $filter: ModelSubscriptionFoodFilterInput
    $owner: String
  ) {
    onUpdateFood(filter: $filter, owner: $owner) {
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
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood(
    $filter: ModelSubscriptionFoodFilterInput
    $owner: String
  ) {
    onDeleteFood(filter: $filter, owner: $owner) {
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
