import { Dispatch, SetStateAction } from 'react'
import { Modal } from '@mantine/core'
import { DatePicker, DateValue } from '@mantine/dates'

type DatePickerModalProps = {
  opened: boolean
  close: () => void
  currentDate: DateValue
  setCurrentDate: Dispatch<SetStateAction<DateValue>>
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
