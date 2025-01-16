/**
 * Rounds a number to the nearest hundredth (two decimal places).
 *
 * @param value - The number to be rounded.
 * @returns The rounded number.
 */
export const roundToTwoDecimalPlaces = (value: number): number => {
  return Math.round(value * 100) / 100
}
