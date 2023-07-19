import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { name: '7/16', calories: 2000, DailyGoal: 3000, max: 4000 },
  { name: '7/17', calories: 2100, DailyGoal: 3000, max: 4000 },
  { name: '7/18', calories: 2300, DailyGoal: 3000, max: 4000 },
  { name: '7/19', calories: 2200, DailyGoal: 3000, max: 4000 },
  { name: '7/20', calories: 2300, DailyGoal: 3000, max: 4000 },
  { name: '7/21', calories: 2300, DailyGoal: 3000, max: 4000 },
  { name: '7/22', calories: 2300, DailyGoal: 3000, max: 4000 },
]

export function CaloriesChart() {
  return (
    <LineChart
      width={750}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line
        type="basis"
        dot={false}
        dataKey="calories"
        stroke="#8884d8"
        strokeWidth={1.2}
      />
      <Line
        type="monotone"
        dot={false}
        dataKey="DailyGoal"
        stroke="#e627a0"
        strokeWidth={1.2}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis dataKey="max" />
      <Tooltip />
    </LineChart>
  )
}
