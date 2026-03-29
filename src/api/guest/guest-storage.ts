import {
  CreateDailyGoalMutationVariables,
  CreateDailyMealRecordMutationVariables,
  CreateUserMealPresetMutationVariables,
  DailyGoal,
  DailyMealRecord,
  ListDailyMealRecordsQueryVariables,
  UpdateDailyGoalMutationVariables,
  UpdateDailyMealRecordMutationVariables,
  UpdateUserMealPresetMutationVariables,
  UserMealPreset,
} from '../../API'

const KEYS = {
  DAILY_GOAL: 'guest_daily_goal',
  MEAL_RECORDS: 'guest_meal_records',
  MEAL_PRESET: 'guest_meal_preset',
  MODE: 'guest_mode',
} as const

const now = () => new Date().toISOString()
const nowMs = () => Date.now()

// ─── DailyGoal ───────────────────────────────────────────────────────────────

export const guestFetchDailyGoal = async (): Promise<DailyGoal | undefined> => {
  const raw = localStorage.getItem(KEYS.DAILY_GOAL)
  return raw ? (JSON.parse(raw) as DailyGoal) : undefined
}

export const guestAddDailyGoal = async (
  variables: CreateDailyGoalMutationVariables,
): Promise<DailyGoal> => {
  const { input } = variables
  const record: DailyGoal = {
    __typename: 'DailyGoal',
    id: crypto.randomUUID(),
    calories: input.calories ?? null,
    protein: input.protein ?? null,
    carbohydrates: input.carbohydrates ?? null,
    fat: input.fat ?? null,
    createdAt: now(),
    updatedAt: now(),
    _version: 1,
    _lastChangedAt: nowMs(),
  }
  localStorage.setItem(KEYS.DAILY_GOAL, JSON.stringify(record))
  return record
}

export const guestUpdDailyGoal = async (
  variables: UpdateDailyGoalMutationVariables,
): Promise<DailyGoal> => {
  const { input } = variables
  const existing = await guestFetchDailyGoal()
  if (!existing) throw new Error('Guest daily goal not found')

  const updated: DailyGoal = {
    ...existing,
    calories: input.calories !== undefined ? input.calories : existing.calories,
    protein: input.protein !== undefined ? input.protein : existing.protein,
    carbohydrates:
      input.carbohydrates !== undefined
        ? input.carbohydrates
        : existing.carbohydrates,
    fat: input.fat !== undefined ? input.fat : existing.fat,
    updatedAt: now(),
    _version: existing._version + 1,
    _lastChangedAt: nowMs(),
  }
  localStorage.setItem(KEYS.DAILY_GOAL, JSON.stringify(updated))
  return updated
}

// ─── DailyMealRecord ─────────────────────────────────────────────────────────

const loadMealRecords = (): DailyMealRecord[] => {
  const raw = localStorage.getItem(KEYS.MEAL_RECORDS)
  return raw ? (JSON.parse(raw) as DailyMealRecord[]) : []
}

const saveMealRecords = (records: DailyMealRecord[]) => {
  localStorage.setItem(KEYS.MEAL_RECORDS, JSON.stringify(records))
}

export const guestFetchDailyMealRecords = async (
  variables?: ListDailyMealRecordsQueryVariables,
): Promise<DailyMealRecord[]> => {
  const records = loadMealRecords()
  const dateFilter = variables?.filter?.date?.eq
  if (!dateFilter) return records
  return records.filter((r) => r.date === dateFilter)
}

export const guestAddDailyMealRecord = async (
  variables: CreateDailyMealRecordMutationVariables,
): Promise<DailyMealRecord> => {
  const { input } = variables
  const record: DailyMealRecord = {
    __typename: 'DailyMealRecord',
    id: crypto.randomUUID(),
    date: input.date,
    breakfast: (input.breakfast as DailyMealRecord['breakfast']) ?? null,
    lunch: (input.lunch as DailyMealRecord['lunch']) ?? null,
    dinner: (input.dinner as DailyMealRecord['dinner']) ?? null,
    snack: (input.snack as DailyMealRecord['snack']) ?? null,
    createdAt: now(),
    updatedAt: now(),
    _version: 1,
    _lastChangedAt: nowMs(),
  }
  const records = loadMealRecords()
  records.push(record)
  saveMealRecords(records)
  return record
}

export const guestUpdDailyMealRecord = async (
  variables: UpdateDailyMealRecordMutationVariables,
): Promise<DailyMealRecord> => {
  const { input } = variables
  const records = loadMealRecords()
  const index = records.findIndex((r) => r.id === input.id)
  if (index === -1) throw new Error('Guest meal record not found')

  const existing = records[index]
  const updated: DailyMealRecord = {
    ...existing,
    breakfast:
      input.breakfast !== undefined
        ? (input.breakfast as DailyMealRecord['breakfast'])
        : existing.breakfast,
    lunch:
      input.lunch !== undefined
        ? (input.lunch as DailyMealRecord['lunch'])
        : existing.lunch,
    dinner:
      input.dinner !== undefined
        ? (input.dinner as DailyMealRecord['dinner'])
        : existing.dinner,
    snack:
      input.snack !== undefined
        ? (input.snack as DailyMealRecord['snack'])
        : existing.snack,
    updatedAt: now(),
    _version: existing._version + 1,
    _lastChangedAt: nowMs(),
  }
  records[index] = updated
  saveMealRecords(records)
  return updated
}

// ─── UserMealPreset ──────────────────────────────────────────────────────────

export const guestFetchUserMealPreset =
  async (): Promise<UserMealPreset | null> => {
    const raw = localStorage.getItem(KEYS.MEAL_PRESET)
    return raw ? (JSON.parse(raw) as UserMealPreset) : null
  }

export const guestAddUserMealPreset = async (
  variables: CreateUserMealPresetMutationVariables,
): Promise<UserMealPreset> => {
  const { input } = variables
  const record: UserMealPreset = {
    __typename: 'UserMealPreset',
    id: crypto.randomUUID(),
    breakfast: (input.breakfast as UserMealPreset['breakfast']) ?? null,
    lunch: (input.lunch as UserMealPreset['lunch']) ?? null,
    dinner: (input.dinner as UserMealPreset['dinner']) ?? null,
    snack: (input.snack as UserMealPreset['snack']) ?? null,
    createdAt: now(),
    updatedAt: now(),
    _version: 1,
    _lastChangedAt: nowMs(),
  }
  localStorage.setItem(KEYS.MEAL_PRESET, JSON.stringify(record))
  return record
}

export const guestUpdUserMealPreset = async (
  variables: UpdateUserMealPresetMutationVariables,
): Promise<UserMealPreset> => {
  const existing = await guestFetchUserMealPreset()
  if (!existing) throw new Error('Guest meal preset not found')

  const { input } = variables
  const updated: UserMealPreset = {
    ...existing,
    breakfast:
      input.breakfast !== undefined
        ? (input.breakfast as UserMealPreset['breakfast'])
        : existing.breakfast,
    lunch:
      input.lunch !== undefined
        ? (input.lunch as UserMealPreset['lunch'])
        : existing.lunch,
    dinner:
      input.dinner !== undefined
        ? (input.dinner as UserMealPreset['dinner'])
        : existing.dinner,
    snack:
      input.snack !== undefined
        ? (input.snack as UserMealPreset['snack'])
        : existing.snack,
    updatedAt: now(),
    _version: existing._version + 1,
    _lastChangedAt: nowMs(),
  }
  localStorage.setItem(KEYS.MEAL_PRESET, JSON.stringify(updated))
  return updated
}

// ─── Cleanup ─────────────────────────────────────────────────────────────────

export const clearAllGuestData = () => {
  Object.values(KEYS).forEach((key) => localStorage.removeItem(key))
}
