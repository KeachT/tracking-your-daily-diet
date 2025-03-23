// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealCategoryName = {
  "BREAKFAST": "BREAKFAST",
  "LUNCH": "LUNCH",
  "DINNER": "DINNER",
  "SNACK": "SNACK"
};

const { DailyGoal, MealRecord, UserMealPreset, FoodItem } = initSchema(schema);

export {
  DailyGoal,
  MealRecord,
  UserMealPreset,
  MealCategoryName,
  FoodItem
};