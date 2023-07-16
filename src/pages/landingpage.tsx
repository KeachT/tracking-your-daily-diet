import { useDisclosure } from '@mantine/hooks'
import { AuthenticatorModal } from '../components/AuthenticatorModal'

export default function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div>
      <p>Landing Page</p>
      <button onClick={open}>auth</button>

      {opened && <AuthenticatorModal opened={opened} close={close} />}
    </div>
  )
}
