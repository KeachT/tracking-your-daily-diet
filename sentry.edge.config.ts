// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
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
