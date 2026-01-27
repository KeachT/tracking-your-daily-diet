import { Amplify } from 'aws-amplify'

import awsExports from '../aws-exports'

let configured = false

export const ensureAmplifyConfigured = (): void => {
  if (configured) {
    return
  }

  Amplify.configure(awsExports)
  configured = true
}

ensureAmplifyConfigured()
