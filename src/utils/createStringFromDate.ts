import { DateValue } from '@mantine/dates'

/**
 * The createStringFromDate function converts the given date to a string format ("YYYY-MM-DD").
 *
 * @param {DateValue} date - The date to be converted (optional).
 * @returns {string} The date string in the "YYYY-MM-DD" format.
 */
export const createStringFromDate = (date: DateValue) => {
  let resolvedDate: Date
  if (date == null) {
    resolvedDate = new Date()
  } else if (typeof date === 'string') {
    resolvedDate = new Date(date)
  } else {
    resolvedDate = date
  }

  const year = resolvedDate.getFullYear()
  const month = String(resolvedDate.getMonth() + 1).padStart(2, '0')
  const day = String(resolvedDate.getDate()).padStart(2, '0')

  const dateString = `${year}-${month}-${day}`
  return dateString
}
