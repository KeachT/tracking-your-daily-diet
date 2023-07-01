import { Grid, RingProgress, Text } from '@mantine/core'

const nutritions = [
  { name: 'Calorie', color: 'violet', value: 40 },
  { name: 'Protein', color: 'red', value: 30 },
  { name: 'Fat', color: 'yellow', value: 20 },
  { name: 'Carbohydrates', color: 'teal', value: 10 },
]

const nutritionRings = nutritions.map((nutrition) => {
  return (
    <Grid.Col sm={6} md={3} key={nutrition.name}>
      <RingProgress
        label={
          <Text size="xs" align="center">
            {nutrition.name}
          </Text>
        }
        sections={[{ value: nutrition.value, color: nutrition.color }]}
      />
    </Grid.Col>
  )
})

export const DailyNutrition = () => {
  return <Grid>{nutritionRings}</Grid>
}
