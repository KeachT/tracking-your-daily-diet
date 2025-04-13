import { Text } from '@mantine/core'

import styles from './NoFoodText.module.css'

export function NoFoodText() {
  return (
    <Text c="dimmed" className={styles.text}>
      No food here...
    </Text>
  )
}
