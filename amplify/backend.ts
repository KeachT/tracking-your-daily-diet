import { defineBackend } from '@aws-amplify/backend'
import { Tags } from 'aws-cdk-lib'

import * as auth from './auth/resource'
import * as data from './data/resource'

const backend = defineBackend({
  data: data.data,
  auth: auth.auth,
})

export type Backend = typeof backend

data.applyEscapeHatches(backend)
auth.applyEscapeHatches(backend)

export function postRefactor() {
  Tags.of(backend.stack).add('gen2-migration/post-refactor', 'true')
}

// Must stay uncommented after the Gen1->Gen2 stack refactor. It reconciles the
// drift created when resources were moved into the Gen2 stacks; re-commenting or
// removing it will break future deployments.
postRefactor()
