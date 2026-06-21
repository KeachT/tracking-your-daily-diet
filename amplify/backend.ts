import * as data from './data/resource';
import * as auth from './auth/resource';
import { defineBackend } from '@aws-amplify/backend';
import { Tags } from 'aws-cdk-lib';

const backend = defineBackend({
  data: data.data,
  auth: auth.auth,
});

export type Backend = typeof backend;

data.applyEscapeHatches(backend);
auth.applyEscapeHatches(backend);

export function postRefactor() {
  Tags.of(backend.stack).add('gen2-migration/post-refactor', 'true');
}

// Uncomment after refactor
// postRefactor();
