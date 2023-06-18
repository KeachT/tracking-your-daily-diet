// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MealCategoryName = {
  "BREAKFAST": "BREAKFAST",
  "LUNCH": "LUNCH",
  "DINNER": "DINNER",
  "SNACK": "SNACK"
};

const { DailyGoal, MealDate, MealCategory, Food } = initSchema(schema);

export {
  DailyGoal,
  MealDate,
  MealCategory,
  Food,
  MealCategoryName
};