import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum MealCategoryName {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SNACK = "SNACK"
}



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

type EagerMealDate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealDate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly mealCategories?: (MealCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMealDate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealDate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly mealCategories: AsyncCollection<MealCategory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MealDate = LazyLoading extends LazyLoadingDisabled ? EagerMealDate : LazyMealDate

export declare const MealDate: (new (init: ModelInit<MealDate>) => MealDate) & {
  copyOf(source: MealDate, mutator: (draft: MutableModel<MealDate>) => MutableModel<MealDate> | void): MealDate;
}

type EagerMealCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: MealCategoryName | keyof typeof MealCategoryName;
  readonly mealdateID: string;
  readonly foods?: (Food | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMealCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MealCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: MealCategoryName | keyof typeof MealCategoryName;
  readonly mealdateID: string;
  readonly foods: AsyncCollection<Food>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MealCategory = LazyLoading extends LazyLoadingDisabled ? EagerMealCategory : LazyMealCategory

export declare const MealCategory: (new (init: ModelInit<MealCategory>) => MealCategory) & {
  copyOf(source: MealCategory, mutator: (draft: MutableModel<MealCategory>) => MutableModel<MealCategory> | void): MealCategory;
}

type EagerFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbohydrates?: number | null;
  readonly fat?: number | null;
  readonly mealcategoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbohydrates?: number | null;
  readonly fat?: number | null;
  readonly mealcategoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Food = LazyLoading extends LazyLoadingDisabled ? EagerFood : LazyFood

export declare const Food: (new (init: ModelInit<Food>) => Food) & {
  copyOf(source: Food, mutator: (draft: MutableModel<Food>) => MutableModel<Food> | void): Food;
}