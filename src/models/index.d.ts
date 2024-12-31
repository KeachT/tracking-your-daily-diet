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