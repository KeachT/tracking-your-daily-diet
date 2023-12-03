import { DateValue } from '@mantine/dates'

/**
 * The createStringFromDate function converts the given date to a string format ("YYYY-MM-DD").
 *
 * @param {DateValue} date - The date to be converted (optional).
 * @returns {string} The date string in the "YYYY-MM-DD" format.
 */
export const createStringFromDate = (date: DateValue) => {
  const nowDate = new Date()

  const year = (date || nowDate).getFullYear()
  const month = String((date || nowDate).getMonth() + 1).padStart(2, '0')
  const day = String((date || nowDate).getDate()).padStart(2, '0')

  const dateString = `${year}-${month}-${day}`

  return dateString
}
