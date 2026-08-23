import { UserMealPreset } from '../../API'

/**
 * The label to show for a preset.
 *
 * Presets created before the name field existed have no name, so they fall back
 * to their position in the list rather than rendering blank.
 *
 * @param preset - The preset to label
 * @param index - The preset's position in the list, zero based
 * @returns The display name.
 */
export const createPresetLabel = (preset: UserMealPreset, index: number) =>
  preset.name?.trim() || `プリセット${index + 1}`

/**
 * The default name for a newly added preset.
 *
 * @param presetCount - How many presets exist before adding
 * @returns The name to assign.
 */
export const createNewPresetName = (presetCount: number) =>
  `プリセット${presetCount + 1}`
