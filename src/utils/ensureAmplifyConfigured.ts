import { Amplify } from 'aws-amplify'

// Gen2 outputs. Gitignored; generated at deploy time (Amplify Hosting backend
// phase) or locally via `ampx sandbox`.
import outputs from '../../amplify_outputs.json'

let configured = false

export const ensureAmplifyConfigured = (): void => {
  if (configured) {
    return
  }

  Amplify.configure(outputs)
  configured = true
}

ensureAmplifyConfigured()
