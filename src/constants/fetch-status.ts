/**
 * The lifecycle of an async fetch that fills a store.
 *
 * `ready` is a terminal state: once the data has loaded it stays loaded. This
 * is what separates it from `SaveStatus`, whose `success` is shown briefly and
 * then falls back to `idle`.
 */
export type FetchStatus = 'idle' | 'loading' | 'ready' | 'error'
