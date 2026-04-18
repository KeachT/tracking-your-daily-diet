import { Box, Card, Grid, Text, Tooltip } from '@mantine/core'
import {
  IconCalendarDot,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'

import { useCurrentDateStore } from '../../stores'
import classes from './DatePickerCard.module.css'

type DatePickerCardProps = {
  disableNavigation?: boolean
}

export function DatePickerCard({
  disableNavigation = false,
}: DatePickerCardProps) {
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const setCurrentDate = useCurrentDateStore((state) => state.setCurrentDate)

  const changeCurrentDate = (amount: number | 'today') => {
    if (disableNavigation) return
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
              month: 'long',
              day: 'numeric',
              weekday: 'short',
            })}
          </Text>
        </Grid>

        <Grid
          align="baseline"
          justify="center"
          mt={16}
          className={disableNavigation ? classes.disabled : undefined}
        >
          <Box mr={12} onClick={() => changeCurrentDate(-1)}>
            <IconChevronLeft
              size={20}
              strokeWidth={1}
              className={classes.button}
            />
          </Box>
          <Tooltip label="今日に移動">
            <Box mr={12} onClick={() => changeCurrentDate('today')}>
              <IconCalendarDot
                size={20}
                strokeWidth={1}
                className={classes.button}
              />
            </Box>
          </Tooltip>
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
