import { Box, Card, Grid, Text } from '@mantine/core'
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
} from '@tabler/icons-react'

import { useCurrentDateStore } from '../../../stores'
import classes from '../DatePickerCard.module.css'

export function DatePickerCard() {
  const { currentDate, setCurrentDate } = useCurrentDateStore()

  const changeCurrentDate = (amount: number | 'today') => {
    if (amount === 'today') {
      setCurrentDate(new Date())
      return
    }
    const date = currentDate ? new Date(currentDate) : new Date()
    date.setDate(date.getDate() + amount)
    setCurrentDate(date)
  }

  return (
    <Box>
      <Card radius="md" withBorder>
        <Grid align="baseline" justify="center" mt={10}>
          <Text fw={200} size="xl" ml={8}>
            {currentDate?.toLocaleString('ja-JP', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </Grid>

        <Grid align="baseline" justify="center" mt={16}>
          <Box mr={12} onClick={() => changeCurrentDate(-1)}>
            <IconChevronLeft
              size={20}
              strokeWidth={1}
              className={classes.button}
            />
          </Box>
          <Box mr={12} onClick={() => changeCurrentDate('today')}>
            <IconDots size={20} strokeWidth={0.5} className={classes.button} />
          </Box>
          <Box onClick={() => changeCurrentDate(1)}>
            <IconChevronRight
              size={20}
              strokeWidth={1}
              className={classes.button}
            />
          </Box>
        </Grid>
      </Card>
    </Box>
  )
}
