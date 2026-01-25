import { generateClient } from 'aws-amplify/api'

import { ensureAmplifyConfigured } from '@/amplify/configure'

ensureAmplifyConfigured()

export const client = generateClient()
