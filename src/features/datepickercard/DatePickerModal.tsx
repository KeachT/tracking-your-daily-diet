import { Dispatch, SetStateAction } from 'react'
import { DatePicker, DateValue } from '@mantine/dates'
import { Modal } from '@mantine/core'

type DatePickerModalProps = {
  opened: boolean
  close: () => void
  setCurrentDate: Dispatch<SetStateAction<Date | null>>
}

export function DatePickerModal({
  opened,
  close,
  setCurrentDate,
}: DatePickerModalProps) {
  const handleDateChange = (value: DateValue) => {
    setCurrentDate(value)
    close()
  }

  return (
    <Modal opened={opened} onClose={close} size="auto">
      <DatePicker onChange={(value) => handleDateChange(value)} />
    </Modal>
  )
}
