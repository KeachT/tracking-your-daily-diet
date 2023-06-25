import { useState } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'

export const LandingPage = () => {
  const [displayAuth, setDisplayAuth] = useState(false)
  const onClickAuth = () => [setDisplayAuth(!displayAuth)]

  return (
    <div>
      <p>Landing Page</p>
      <button onClick={onClickAuth}>auth</button>
      {displayAuth && <Authenticator variation="modal" />}
    </div>
  )
}
