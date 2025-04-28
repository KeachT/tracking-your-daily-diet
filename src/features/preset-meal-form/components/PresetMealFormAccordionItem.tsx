import { Accordion, Button, Center, Skeleton } from '@mantine/core'
import { Notifications, notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'

import { MealCategoryName } from '@/API'

import { LoadingSkeleton } from '../../../components/LoadingSkeleton'
import { MealIcon } from '../../../components/MealIcon'
import { NoFoodText } from '../../../components/NoFoodText'
import {
  NOTIFICATION_DISPLAY_DURATION_MS,
  SAVE_BUTTON_REENABLE_DELAY_MS,
} from '../../../constants'
import { MEAL_CATEGORY_LABELS } from '../constants'
import { useUserMealPresetStore } from '../stores'
import { FormsType } from '../types'
import { createFoodInitialValues, saveUserMealPreset } from '../utils'
import { PresetMealFormFields } from './PresetMealFormFields'

type PresetMealFormAccordionItemProps = {
  mealCategoryName: MealCategoryName
  forms: FormsType
  isLoading?: boolean
}

export function PresetMealFormAccordionItem({
  mealCategoryName,
  forms,
  isLoading = true,
}: PresetMealFormAccordionItemProps) {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)
  const { userMealPreset, setUserMealPreset } = useUserMealPresetStore()

  const handleAdd = () =>
    forms.insertListItem(`${mealCategoryName}`, createFoodInitialValues())

  const handleSave = async () => {
    setIsSaveButtonDisabled(true)
    try {
      await saveUserMealPreset(
        forms,
        mealCategoryName,
        userMealPreset,
        setUserMealPreset
      )
      handleSuccess()
    } catch (err) {
      handleError()
    }
  }

  const handleSuccess = () => {
    notifications.show({
      title: 'プリセット',
      message: `${MEAL_CATEGORY_LABELS[mealCategoryName]}を保存しました`,
      color: 'green',
      icon: <IconCheck />,
    })
    setTimeout(
      () => setIsSaveButtonDisabled(false),
      SAVE_BUTTON_REENABLE_DELAY_MS
    )
  }

  const handleError = () => {
    notifications.show({
      title: 'プリセット',
      message: `${MEAL_CATEGORY_LABELS[mealCategoryName]}の保存に失敗しました`,
      color: 'red',
      icon: <IconX />,
    })
    setTimeout(
      () => setIsSaveButtonDisabled(false),
      SAVE_BUTTON_REENABLE_DELAY_MS
    )
  }

  return (
    <Accordion.Item value={mealCategoryName}>
      <Accordion.Control
        icon={<MealIcon mealCategoryName={mealCategoryName} />}
      >
        {MEAL_CATEGORY_LABELS[mealCategoryName]}（プリセット）
      </Accordion.Control>

      <Accordion.Panel>
        {isLoading ? (
          <LoadingSkeleton height={100} />
        ) : forms.values[mealCategoryName]?.length > 0 ? (
          <PresetMealFormFields
            form={forms}
            mealCategoryName={mealCategoryName}
          />
        ) : (
          <NoFoodText />
        )}

        <Center mt="xl">
          <Button mr="md" onClick={handleAdd} disabled={isLoading}>
            追加
          </Button>
          <Button
            color="teal"
            onClick={handleSave}
            disabled={isSaveButtonDisabled || isLoading}
          >
            保存
          </Button>
        </Center>
      </Accordion.Panel>

      <Notifications limit={10} autoClose={NOTIFICATION_DISPLAY_DURATION_MS} />
    </Accordion.Item>
  )
}
