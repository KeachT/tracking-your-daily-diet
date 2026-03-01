import { Box, Card, Grid, Text } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
} from '@tabler/icons-react'

import { useCurrentDateStore } from '../../stores'
import classes from './DatePickerCard.module.css'

type DatePickerMode = 'day' | 'week'

type DatePickerCardProps = {
  mode?: DatePickerMode
}

const createDateAtStartOfDay = (date: Date): Date => {
  const normalizedDate = new Date(date)
  normalizedDate.setHours(0, 0, 0, 0)
  return normalizedDate
}

const createWeekRange = (targetDate: Date) => {
  const weekEnd = createDateAtStartOfDay(targetDate)
  const weekStart = new Date(weekEnd)
  weekStart.setDate(weekStart.getDate() - 6)

  return { weekStart, weekEnd }
}

const formatDate = (date: Date) =>
  date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

export function DatePickerCard({ mode = 'day' }: DatePickerCardProps) {
  const currentDate = useCurrentDateStore((state) => state.currentDate)
  const setCurrentDate = useCurrentDateStore((state) => state.setCurrentDate)

  const selectedDate = currentDate ? new Date(currentDate) : new Date()

  const changeCurrentDate = (amount: number | 'today') => {
    if (amount === 'today') {
      setCurrentDate(new Date())
      return
    }

    const date = new Date(selectedDate)
    date.setDate(date.getDate() + amount)
    setCurrentDate(date)
  }

  const { weekStart, weekEnd } = createWeekRange(selectedDate)

  return (
    <Box>
      <Card radius="md" withBorder>
        <Grid align="baseline" justify="center" mt={10}>
          {mode === 'week' ? (
            <Text fw={500} size="lg" ml={8}>
              {`${formatDate(weekStart)} - ${formatDate(weekEnd)}`}
            </Text>
          ) : (
            <Text fw={200} size="xl" ml={8}>
              {selectedDate.toLocaleString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          )}
        </Grid>

        <Grid align="baseline" justify="center" mt={16}>
          <Box mr={12} onClick={() => changeCurrentDate(mode === 'week' ? -7 : -1)}>
            <IconChevronLeft
              size={20}
              strokeWidth={1}
              className={classes.button}
            />
          </Box>
          <Box mr={12} onClick={() => changeCurrentDate('today')}>
            <IconDots size={20} strokeWidth={0.5} className={classes.button} />
          </Box>
          <Box onClick={() => changeCurrentDate(mode === 'week' ? 7 : 1)}>
            <IconChevronRight
              size={20}
              strokeWidth={1}
              className={classes.button}
            />
          </Box>
        </Grid>

        {mode === 'week' ? (
          <>
            <Calendar
              mt="md"
              value={selectedDate}
              onChange={(date) => setCurrentDate(date)}
              getDayProps={(date) => {
                const normalizedDate = createDateAtStartOfDay(date)
                const isInSelectedWeek =
                  normalizedDate >= weekStart && normalizedDate <= weekEnd
                const isWeekEnd =
                  normalizedDate.getTime() === weekEnd.getTime()

                return {
                  className: isInSelectedWeek ? classes.weekDay : undefined,
                  style: {
                    borderRadius: isWeekEnd ? '999px' : '6px',
                  },
                }
              }}
            />

            <Text size="xs" c="dimmed" mt="xs">
              週を選択して期間を切り替えできます。将来的に有料版では選択可能期間を拡張予定です。
            </Text>
          </>
        ) : null}
      </Card>
    </Box>
  )
}
