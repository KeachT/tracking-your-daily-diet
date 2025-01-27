import { Container, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { AuthenticatorModal } from '../../AuthenticatorModal'
import classes from '../styles/LandingPage.module.css'
import { AlertMessage } from './AlertMessage'
import { FeatureSection } from './FeatureSection'
import { HeroSection } from './HeroSection'

export function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div className={classes.wrapper}>
      <Container size="xl" className={classes.inner}>
        <Stack gap={50}>
          <HeroSection open={open} />
          <FeatureSection />
          <AlertMessage />
        </Stack>
      </Container>

      {opened && <AuthenticatorModal opened={opened} close={close} />}
    </div>
  )
}
