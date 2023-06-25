import { useAuthenticator } from '@aws-amplify/ui-react'

export const Dashboard = () => {
  const { user, signOut } = useAuthenticator()

  const handleSignOut = async () => {
    try {
      await signOut()
      console.log('Signed out')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div>
      {user && <p>こんにちは！{user.username}</p>}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}
