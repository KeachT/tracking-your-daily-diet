import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum MealCategoryName {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SNACK = "SNACK"
}

type EagerFoodItem = {
  readonly id: string;
  readonly name: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbohydrates?: number | null;
  readonly fat?: number | null;
}

type LazyFoodItem = {
  readonly id: string;
  readonly name: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbohydrates?: number | null;
  readonly fat?: number | null;
}

export declare type FoodItem = LazyLoading extends LazyLoadingDisabled ? EagerFoodItem : LazyFoodItem

export declare const FoodItem: (new (init: ModelInit<FoodItem>) => FoodItem)

type EagerDailyGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DailyGoal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbohydrates?: number | null;
  readonly fat?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDailyGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DailyGoal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbohydrates?: number | null;
  readonly fat?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DailyGoal = LazyLoading extends LazyLoadingDisabled ? EagerDailyGoal : LazyDailyGoal

export declare const DailyGoal: (new (init: ModelInit<DailyGoal>) => DailyGoal) & {
  copyOf(source: DailyGoal, mutator: (draft: MutableModel<DailyGoal>) => MutableModel<DailyGoal> | void): DailyGoal;
}

type EagerDailyMealRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DailyMealRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly breakfast?: (FoodItem | null)[] | null;
  readonly lunch?: (FoodItem | null)[] | null;
  readonly dinner?: (FoodItem | null)[] | null;
  readonly snack?: (FoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDailyMealRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DailyMealRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly breakfast?: (FoodItem | null)[] | null;
  readonly lunch?: (FoodItem | null)[] | null;
  readonly dinner?: (FoodItem | null)[] | null;
  readonly snack?: (FoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DailyMealRecord = LazyLoading extends LazyLoadingDisabled ? EagerDailyMealRecord : LazyDailyMealRecord

export declare const DailyMealRecord: (new (init: ModelInit<DailyMealRecord>) => DailyMealRecord) & {
  copyOf(source: DailyMealRecord, mutator: (draft: MutableModel<DailyMealRecord>) => MutableModel<DailyMealRecord> | void): DailyMealRecord;
}

type EagerMealRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly category: MealCategoryName | keyof typeof MealCategoryName;
  readonly foods?: (FoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMealRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly category: MealCategoryName | keyof typeof MealCategoryName;
  readonly foods?: (FoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MealRecord = LazyLoading extends LazyLoadingDisabled ? EagerMealRecord : LazyMealRecord

export declare const MealRecord: (new (init: ModelInit<MealRecord>) => MealRecord) & {
  copyOf(source: MealRecord, mutator: (draft: MutableModel<MealRecord>) => MutableModel<MealRecord> | void): MealRecord;
}

type EagerUserMealPreset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMealPreset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly breakfast?: (FoodItem | null)[] | null;
  readonly lunch?: (FoodItem | null)[] | null;
  readonly dinner?: (FoodItem | null)[] | null;
  readonly snack?: (FoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMealPreset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserMealPreset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly breakfast?: (FoodItem | null)[] | null;
  readonly lunch?: (FoodItem | null)[] | null;
  readonly dinner?: (FoodItem | null)[] | null;
  readonly snack?: (FoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMealPreset = LazyLoading extends LazyLoadingDisabled ? EagerUserMealPreset : LazyUserMealPreset

export declare const UserMealPreset: (new (init: ModelInit<UserMealPreset>) => UserMealPreset) & {
  copyOf(source: UserMealPreset, mutator: (draft: MutableModel<UserMealPreset>) => MutableModel<UserMealPreset> | void): UserMealPreset;
}