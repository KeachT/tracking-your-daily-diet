/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNoteInput = {
  id?: string | null,
  text: string,
};

export type ModelNoteConditionInput = {
  text?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
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


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  text: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNoteInput = {
  id: string,
  text?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

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

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
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

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
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

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
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

export type ModelSubscriptionDailyGoalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  calories?: ModelSubscriptionFloatInput | null,
  protein?: ModelSubscriptionFloatInput | null,
  carbohydrates?: ModelSubscriptionFloatInput | null,
  fat?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
  or?: Array< ModelSubscriptionDailyGoalFilterInput | null > | null,
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

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
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

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      text: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
