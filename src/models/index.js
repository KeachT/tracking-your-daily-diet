// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealCategoryName = {
  "BREAKFAST": "BREAKFAST",
  "LUNCH": "LUNCH",
  "DINNER": "DINNER",
  "SNACK": "SNACK"
};

const { DailyGoal, DailyMealRecord, MealRecord, UserMealPreset, FoodItem } = initSchema(schema);

export {
  DailyGoal,
  DailyMealRecord,
  MealRecord,
  UserMealPreset,
  MealCategoryName,
  FoodItem
};