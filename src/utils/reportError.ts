import * as Sentry from '@sentry/nextjs'

/**
 * Centralized error reporting helper.
 *
 * - In development it still logs via `console.error` to keep the debugging
 *   experience intact.
 * - It always forwards to Sentry. When the DSN is unset, `Sentry.init` is
 *   skipped so `captureException` becomes a no-op, keeping local / E2E quiet.
 *
 * The `catch` blocks previously guarded `console.error` with
 * `process.env.NODE_ENV !== 'production'`; that branch now lives inside this
 * helper.
 */
export function reportError(message: string, error: unknown) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(message, error)
  }

  Sentry.captureException(error, { extra: { message } })
}
