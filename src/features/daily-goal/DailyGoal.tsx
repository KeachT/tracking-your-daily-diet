import { useEffect, useState } from 'react'
import { Box, Button } from '@mantine/core'
import { CreateDailyGoalInput, UpdateDailyGoalInput } from '../../API'
import { fetchDailyGoals, addDailyGoal, updDailyGoal } from './utils'
import { DailyGoalNumberInput } from './DailyGoalNumberInput'

export function DailyGoal() {
  const [dailyGoalId, setDailyGoalId] = useState<string>('')
  const [calories, setCalories] = useState<number>(0)
  const [protein, setProtein] = useState<number>(0)
  const [fat, setFat] = useState<number>(0)
  const [carbohydrates, setCarbohydrates] = useState<number>(0)
  const [version, setVersion] = useState<number>(0)

  const createDailyGoalInput: CreateDailyGoalInput = {
    calories: calories,
    protein: protein,
    carbohydrates: carbohydrates,
    fat: fat,
  }

  const updateDailyGoalInput: UpdateDailyGoalInput = {
    id: dailyGoalId,
    calories: calories,
    protein: protein,
    carbohydrates: carbohydrates,
    fat: fat,
    _version: version,
  }

  const handleClick = () => {
    if (!dailyGoalId) {
      addDailyGoal(
        createDailyGoalInput,
        setDailyGoalId,
        setCalories,
        setProtein,
        setFat,
        setCarbohydrates,
        setVersion
      )
      return
    }
    updDailyGoal(
      updateDailyGoalInput,
      setDailyGoalId,
      setCalories,
      setProtein,
      setFat,
      setCarbohydrates,
      setVersion
    )
  }

  useEffect(() => {
    fetchDailyGoals(
      setDailyGoalId,
      setCalories,
      setProtein,
      setFat,
      setCarbohydrates,
      setVersion
    )
  }, [])

  return (
    <Box>
      <DailyGoalNumberInput
        label="Calories (Kcal)"
        placeholder="Calories"
        value={calories}
        handleChange={setCalories}
        step={10}
        withAsterisk
      />
      <DailyGoalNumberInput
        label="Protein (g)"
        placeholder="Protein"
        value={protein}
        handleChange={setProtein}
        step={1}
      />
      <DailyGoalNumberInput
        label="Fat (g)"
        placeholder="Fat"
        value={fat}
        handleChange={setFat}
        step={1}
      />
      <DailyGoalNumberInput
        label="Carbohydrates (g)"
        placeholder="Carbohydrates"
        value={carbohydrates}
        handleChange={setCarbohydrates}
        step={1}
      />

      <Button mr={50} onClick={handleClick}>
        Save
      </Button>
    </Box>
  )
}
