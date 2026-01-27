import { generateClient } from 'aws-amplify/api'

import { ensureAmplifyConfigured } from './ensureAmplifyConfigured'

ensureAmplifyConfigured()

export const client = generateClient()
