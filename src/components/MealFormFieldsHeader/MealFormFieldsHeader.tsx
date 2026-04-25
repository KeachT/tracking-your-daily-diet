import { Grid, Text } from '@mantine/core'

export function MealFormFieldsHeader() {
  return (
    <Grid align="center" visibleFrom="sm" mt="xs">
      <Grid.Col span={{ base: 12, sm: 2 }}>
        <Text size="sm" fw={500} c="dimmed">
          食品名
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 3, sm: 2 }}>
        <Text size="sm" fw={500} c="dimmed">
          カロリー
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 3, sm: 2 }}>
        <Text size="sm" fw={500} c="dimmed">
          タンパク質
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 3, sm: 2 }}>
        <Text size="sm" fw={500} c="dimmed">
          脂質
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 3, sm: 2 }}>
        <Text size="sm" fw={500} c="dimmed">
          炭水化物
        </Text>
      </Grid.Col>
      <Grid.Col span={2} />
    </Grid>
  )
}
