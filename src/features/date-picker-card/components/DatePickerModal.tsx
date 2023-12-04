import { Modal } from '@mantine/core'
import { DatePicker, DateValue } from '@mantine/dates'

import { CurrentDateState } from '../../../stores/currentDate'

type DatePickerModalProps = {
  opened: boolean
  close: () => void
  currentDate: CurrentDateState['currentDate']
  setCurrentDate: CurrentDateState['setCurrentDate']
}

export function DatePickerModal({
  opened,
  close,
  currentDate,
  setCurrentDate,
}: DatePickerModalProps) {
  const handleDateChange = (date: DateValue) => {
    setCurrentDate(date)
    close()
  }

  return (
    <Modal opened={opened} onClose={close} size="auto">
      <DatePicker
        firstDayOfWeek={0}
        value={currentDate}
        onChange={(selectedDate) => handleDateChange(selectedDate)}
      />
    </Modal>
  )
}
