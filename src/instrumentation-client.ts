// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN

// Skip initialization when the DSN is not set (avoids noisy events in local dev and E2E)
if (dsn) {
  Sentry.init({
    dsn,
    // Tag events by environment so the Sentry UI can filter (e.g. production)
    environment: process.env.NEXT_PUBLIC_SENTRY_ENV ?? 'production',
    // Sentry Logs disabled — error monitoring only (logs may carry sensitive data)
    enableLogs: false,
  })
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
