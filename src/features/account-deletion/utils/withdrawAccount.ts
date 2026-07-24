import { deleteUser } from 'aws-amplify/auth'

import { purgeAllUserData } from './purgeAllUserData'

/**
 * Withdraws (deletes) the signed-in account.
 *
 * The order is critical:
 *   1. Purge all backend data while owner auth is still valid.
 *   2. Delete the Cognito user itself.
 *
 * `deleteUser()` does NOT cascade-delete DynamoDB records, and once the user is
 * gone the owner-scoped GraphQL API can no longer be called — so deleting the
 * user first would strand orphaned data. Purge must come first, always.
 */
export async function withdrawAccount(): Promise<void> {
  // 1. delete data first (needs owner auth)
  await purgeAllUserData()

  // 2. delete the account last
  await deleteUser()
}
