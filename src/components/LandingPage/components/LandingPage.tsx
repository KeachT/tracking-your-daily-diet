import { Container, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { signIn } from 'aws-amplify/auth'
import { useState } from 'react'

import { AuthenticatorModal } from '../../AuthenticatorModal'
import classes from '../styles/LandingPage.module.css'
import { AlertMessage } from './AlertMessage'
import { FeatureSection } from './FeatureSection'
import { HeroSection } from './HeroSection'

export function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false)
  const [isGuestLoginLoading, setIsGuestLoginLoading] = useState(false)
  const [guestLoginError, setGuestLoginError] = useState('')

  const handleGuestLogin = async () => {
    const email = process.env.NEXT_PUBLIC_GUEST_LOGIN_EMAIL
    const password = process.env.NEXT_PUBLIC_GUEST_LOGIN_PASSWORD

    if (!email || !password) {
      setGuestLoginError('ゲストログインの設定が見つかりませんでした。')
      return
    }

    try {
      setGuestLoginError('')
      setIsGuestLoginLoading(true)
      await signIn({ username: email, password })
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error signing in as guest:', error)
      }
      setGuestLoginError('ゲストログインに失敗しました。時間をおいて再度お試しください。')
    } finally {
      setIsGuestLoginLoading(false)
    }
  }

  return (
    <div className={classes.wrapper}>
      <Container size="xl" className={classes.inner}>
        <Stack gap={30}>
          <HeroSection
            open={open}
            onGuestLogin={handleGuestLogin}
            isGuestLoginLoading={isGuestLoginLoading}
            guestLoginError={guestLoginError}
          />
          <FeatureSection />
          <AlertMessage />
        </Stack>
      </Container>

      {opened && <AuthenticatorModal opened={opened} close={close} />}
    </div>
  )
}
