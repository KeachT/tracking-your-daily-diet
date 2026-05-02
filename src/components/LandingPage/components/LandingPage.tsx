import { Container, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { useGuestModeStore } from '../../../stores'
import { AuthenticatorModal } from '../../AuthenticatorModal'
import classes from '../styles/LandingPage.module.css'
import { AlertMessage } from './AlertMessage'
import { AppPreviewSection } from './AppPreviewSection'
import { FAQSection } from './FAQSection'
import { FeatureSection } from './FeatureSection'
import { FinalCTASection } from './FinalCTASection'
import { HeroSection } from './HeroSection'
import { HowToSection } from './HowToSection'
import { PainPointSection } from './PainPointSection'

export function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false)
  const { enterGuestMode } = useGuestModeStore()

  return (
    <div className={classes.wrapper}>
      <Container size="xl" className={classes.inner}>
        <Stack gap={60}>
          <HeroSection open={open} onGuestLogin={enterGuestMode} />
          <AppPreviewSection />
          <FeatureSection />
          <PainPointSection />
          <HowToSection />
          <FAQSection />
          <AlertMessage />
          <FinalCTASection open={open} onGuestLogin={enterGuestMode} />
        </Stack>
      </Container>

      {opened && <AuthenticatorModal opened={opened} close={close} />}
    </div>
  )
}
