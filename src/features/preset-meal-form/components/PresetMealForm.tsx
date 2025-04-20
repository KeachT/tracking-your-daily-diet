import { Accordion } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'

import { MealCategoryName } from '@/API'

import { useUserMealPresetStore } from '../stores'
import { FormsType } from '../types'
import { createInitialFormValuesFromPreset, loadUserMealPreset } from '../utils'
import { PresetMealFormAccordionItem } from './PresetMealFormAccordionItem'

export function PresetMealForm() {
  const { userMealPreset, setUserMealPreset } = useUserMealPresetStore()
  const [isLoading, setIsLoading] = useState(true)

  const mealCategoryNames = Object.values(
    MealCategoryName
  ) as MealCategoryName[]
  const defaultCategory = MealCategoryName.BREAKFAST
  const forms: FormsType = useForm({})

  useEffect(() => {
    loadUserMealPreset(setUserMealPreset, setIsLoading)
  }, [setUserMealPreset])

  useEffect(() => {
    const initialFormValues = createInitialFormValuesFromPreset(userMealPreset)
    forms.setValues(initialFormValues)
    // eslint-disable-next-line
  }, [userMealPreset])

  return (
    <Accordion defaultValue={defaultCategory} variant="separated">
      {mealCategoryNames.map((mealCategoryName) => (
        <PresetMealFormAccordionItem
          key={mealCategoryName}
          mealCategoryName={mealCategoryName}
          forms={forms}
          isLoading={isLoading}
        />
      ))}
    </Accordion>
  )
}
