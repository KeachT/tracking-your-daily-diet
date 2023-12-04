import { CurrentDateState } from '../stores/currentDate'
import { createStringFromDate } from './createStringFromDate'

/**
 * Creates a date object for the previous week from the given date.
 * @param {DateValue} currentDate - The current date object.
 * @returns {Date} - The date object for the previous week.
 */
export const createPrevWeekDate = (
  currentDate: CurrentDateState['currentDate']
) => {
  const currentDateString = createStringFromDate(currentDate)

  const prevWeekDate = new Date(currentDateString)
  const nowDate = new Date()

  prevWeekDate.setDate((currentDate || nowDate).getDate() - 6)

  return prevWeekDate
}
