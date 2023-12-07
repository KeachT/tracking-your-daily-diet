import { Alert, Button, Center, Container, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconAlertCircle } from '@tabler/icons-react'

import { AuthenticatorModal } from '../AuthenticatorModal'
import { createLandingPageStyle } from './utils'

export function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false)
  const { classes } = createLandingPageStyle()

  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'blue', to: 'lime' }}
            inherit
          >
            Tracking Your Daily Diet
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Our weight-loss app provides you with an easy and efficient way of
          tracking your meals and monitoring your progress to achieve your
          goals. Join us today and take the first step towards a healthier you!
        </Text>

        {/* TODO Turn this alert off when the app is complete. */}
        <Alert
          icon={<IconAlertCircle size={20} />}
          title="Notice"
          color="red"
          mt={30}
        >
          This application is currently in development. It may contain bugs and
          incomplete features.
        </Alert>

        <Center mt={30}>
          <Button
            size="lg"
            variant="gradient"
            gradient={{ from: 'cyan', to: 'teal' }}
            onClick={open}
          >
            Sign In
          </Button>
        </Center>
      </Container>

      {opened && <AuthenticatorModal opened={opened} close={close} />}
    </div>
  )
}
