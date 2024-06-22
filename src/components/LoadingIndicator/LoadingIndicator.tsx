import { Container, Loader } from '@mantine/core'

import classes from './LoadingIndicator.module.css'

export function LoadingIndicator() {
  return (
    <Container className={classes.container}>
      <Loader color="lime" size="xl" variant="bars" />
    </Container>
  )
}
