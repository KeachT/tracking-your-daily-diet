/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
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
