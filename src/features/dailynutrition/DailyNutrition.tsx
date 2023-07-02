import { Grid, RingProgress, Text } from '@mantine/core'

// TODO This array is mock data.
const nutritions = [
  {
    name: 'Calorie',
    color: 'violet',
    number: 1800,
    percent: 70,
  },
  {
    name: 'Protein',
    color: 'red',
    number: 80,
    percent: 75,
  },
  { name: 'Fat', color: 'yellow', number: 70, percent: 90 },
  {
    name: `Carbonhydrates`,
    color: 'teal',
    number: 120,
    percent: 85,
  },
]

const nutritionRings = nutritions.map((nutrition) => {
  const { name, number, percent, color } = nutrition
  const unit = name === 'Calorie' ? 'Kcal' : 'g'

  return (
    <Grid.Col sm={6} md={3} key={nutrition.name}>
      <Text weight={200} size="md">
        {name}
      </Text>

      <RingProgress
        size={150}
        thickness={8}
        roundCaps
        label={
          <div>
            <Text color="blue" weight={400} align="center" size="lg">
              {number}
            </Text>
            <Text weight={200} align="center" size="sm">
              {unit}
            </Text>
          </div>
        }
        sections={[
          {
            value: percent,
            color: color,
            tooltip: percent + '%',
          },
        ]}
      />
    </Grid.Col>
  )
})

export const DailyNutrition = () => {
  return <Grid gutter={50}>{nutritionRings}</Grid>
}
