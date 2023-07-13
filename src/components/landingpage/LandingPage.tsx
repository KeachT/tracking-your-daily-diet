import { useState } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'

export function LandingPage() {
  const [displayAuth, setDisplayAuth] = useState(false)
  const handleClickAuth = () => [setDisplayAuth(!displayAuth)]

  return (
    <div>
      <p>Landing Page</p>
      <button onClick={handleClickAuth}>auth</button>
      {displayAuth && <Authenticator variation="modal" />}
    </div>
  )
}
