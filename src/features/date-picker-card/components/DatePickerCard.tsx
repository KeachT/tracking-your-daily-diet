import { Box, Card, Grid, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconBoxMultiple,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'

import { useCurrentDateStore } from '../../../stores/currentDate'
import classes from '../DatePickerCard.module.css'
import { DatePickerModal } from './DatePickerModal'

export function DatePickerCard() {
  const { currentDate, setCurrentDate } = useCurrentDateStore()
  const [opened, { open, close }] = useDisclosure(false)

  const currentDateChange = (amount: number) => {
    const oldDate = currentDate || new Date()
    const newDate = new Date(oldDate)
    newDate.setDate(oldDate.getDate() + amount)
    setCurrentDate(newDate)
  }

  const handleClickIconChevronRight = () => currentDateChange(1)
  const handleClickIconChevronLeft = () => currentDateChange(-1)

  return (
    <Box>
      <Card radius="md" withBorder>
        <Grid align="baseline" justify="center" mt={2} mb={10}>
          <Text fw={200} size="md">
            Current Date:
          </Text>
          <Text fw={200} size="xl" ml={8}>
            {currentDate?.toLocaleDateString()}
          </Text>
        </Grid>
        <Grid align="baseline" justify="center" mt={2}>
          <Box mr={20} onClick={handleClickIconChevronLeft}>
            <IconChevronLeft
              size={20}
              strokeWidth={1}
              className={classes.button}
            />
          </Box>
          <Box mr={20} onClick={open}>
            <IconBoxMultiple
              size={20}
              strokeWidth={0.5}
              className={classes.button}
            />
          </Box>
          <Box onClick={handleClickIconChevronRight}>
            <IconChevronRight
              size={20}
              strokeWidth={1}
              className={classes.button}
            />
          </Box>
        </Grid>
      </Card>

      {opened && (
        <DatePickerModal
          opened={opened}
          close={close}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      )}
    </Box>
  )
}
