import {
  ActionIcon,
  Group,
  Tabs,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { deleteUserMealPreset } from '../../../api/user-meal-preset'
import {
  MAX_USER_MEAL_PRESETS,
  selectSelectedUserMealPreset,
  useUserMealPresetStore,
} from '../../../stores'
import {
  createUserMealPreset,
  renameUserMealPreset,
} from '../../preset-meal-form'
import { createNewPresetName, createPresetLabel } from '../utils'
import { PresetDeleteModal } from './PresetDeleteModal'

export function PresetSwitcher() {
  const userMealPresets = useUserMealPresetStore(
    (state) => state.userMealPresets,
  )
  const selectedPresetId = useUserMealPresetStore(
    (state) => state.selectedPresetId,
  )
  const selectedPreset = useUserMealPresetStore(selectSelectedUserMealPreset)
  const loadStatus = useUserMealPresetStore((state) => state.loadStatus)
  const setSelectedPresetId = useUserMealPresetStore(
    (state) => state.setSelectedPresetId,
  )
  const upsertUserMealPreset = useUserMealPresetStore(
    (state) => state.upsertUserMealPreset,
  )
  const removeUserMealPreset = useUserMealPresetStore(
    (state) => state.removeUserMealPreset,
  )

  const [deleteModalOpened, deleteModal] = useDisclosure(false)
  const [isAdding, setIsAdding] = useState(false)
  const [nameDraft, setNameDraft] = useState('')

  const selectedIndex = userMealPresets.findIndex(
    (preset) => preset.id === selectedPresetId,
  )

  // Follow the selection: switching tabs must reload the field, and a rename
  // saved elsewhere should not be overwritten by a stale draft.
  useEffect(() => {
    setNameDraft(selectedPreset?.name ?? '')
  }, [selectedPreset?.id, selectedPreset?.name])

  const isReady = loadStatus === 'ready'
  const hasReachedLimit = userMealPresets.length >= MAX_USER_MEAL_PRESETS

  const handleAdd = async () => {
    setIsAdding(true)
    try {
      const created = await createUserMealPreset(
        createNewPresetName(userMealPresets.length),
      )
      upsertUserMealPreset(created)
    } finally {
      setIsAdding(false)
    }
  }

  const handleRename = async () => {
    if (!selectedPreset) return

    const trimmed = nameDraft.trim()
    if (trimmed === (selectedPreset.name ?? '')) return

    upsertUserMealPreset(await renameUserMealPreset(selectedPreset.id, trimmed))
  }

  const handleDelete = async () => {
    if (!selectedPreset) return

    await deleteUserMealPreset({ input: { id: selectedPreset.id } })
    removeUserMealPreset(selectedPreset.id)
  }

  if (!isReady) return null

  return (
    <>
      <Group justify="space-between" align="flex-end" wrap="nowrap">
        <Tabs
          value={selectedPresetId}
          onChange={setSelectedPresetId}
          variant="outline"
          style={{ flex: 1, minWidth: 0 }}
        >
          <Tabs.List>
            {userMealPresets.map((preset, index) => (
              <Tabs.Tab key={preset.id} value={preset.id}>
                {createPresetLabel(preset, index)}
              </Tabs.Tab>
            ))}

            <Tooltip
              label={
                hasReachedLimit
                  ? `プリセットは${MAX_USER_MEAL_PRESETS}つまで作れます`
                  : 'プリセットを追加'
              }
            >
              <ActionIcon
                variant="subtle"
                color="teal"
                onClick={handleAdd}
                loading={isAdding}
                disabled={hasReachedLimit}
                aria-label="プリセットを追加"
                ml="xs"
                mt={4}
              >
                <IconPlus size={18} />
              </ActionIcon>
            </Tooltip>
          </Tabs.List>
        </Tabs>
      </Group>

      {selectedPreset ? (
        <Group mt="md" align="flex-end" wrap="nowrap">
          <TextInput
            label="プリセット名"
            value={nameDraft}
            onChange={(event) => setNameDraft(event.currentTarget.value)}
            onBlur={handleRename}
            placeholder={createPresetLabel(selectedPreset, selectedIndex)}
            style={{ flex: 1 }}
          />
          <Tooltip label="このプリセットを削除">
            <ActionIcon
              variant="subtle"
              color="red"
              onClick={deleteModal.open}
              aria-label="このプリセットを削除"
              mb={4}
            >
              <IconTrash size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
      ) : (
        <Text size="sm" c="dimmed" mt="md">
          プリセットがありません。「+」で追加できます
        </Text>
      )}

      {selectedPreset && (
        <PresetDeleteModal
          opened={deleteModalOpened}
          close={deleteModal.close}
          presetLabel={createPresetLabel(selectedPreset, selectedIndex)}
          onConfirm={handleDelete}
        />
      )}
    </>
  )
}
