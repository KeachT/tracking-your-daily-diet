// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealCategoryName = {
  "BREAKFAST": "BREAKFAST",
  "LUNCH": "LUNCH",
  "DINNER": "DINNER",
  "SNACK": "SNACK"
};

const { DailyGoal, DailyMealRecord, UserMealPreset, FoodItem } = initSchema(schema);

export {
  DailyGoal,
  DailyMealRecord,
  UserMealPreset,
  MealCategoryName,
  FoodItem
};