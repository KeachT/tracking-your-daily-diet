import { NumberInput } from '@mantine/core'

type DailyGoalNumberInputProps = {
  label: string
  placeholder: string
  value: number | ''
  step: number
  withAsterisk?: boolean
  handleChange: (value: number) => void
}

export function DailyGoalNumberInput({
  label,
  placeholder,
  value,
  step,
  withAsterisk,
  handleChange,
}: DailyGoalNumberInputProps) {
  return (
    <NumberInput
      label={label}
      placeholder={placeholder}
      value={value}
      step={step}
      stepHoldDelay={500}
      stepHoldInterval={100}
      min={0}
      mb={30}
      radius="md"
      withAsterisk={withAsterisk}
      onChange={handleChange}
      precision={placeholder === 'Calories' ? 0 : 2}
      removeTrailingZeros={placeholder === 'Calories' ? false : true}
    />
  )
}
