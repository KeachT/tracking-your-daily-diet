import { Container, Loader } from '@mantine/core'

export function LoadingIndicator() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loader color="lime" size="xl" variant="bars" />
    </Container>
  )
}
