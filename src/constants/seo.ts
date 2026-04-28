export const Robots = {
  IndexFollow: 'index, follow',
  NoindexFollow: 'noindex, follow',
  NoindexNofollow: 'noindex, nofollow',
} as const

export type RobotsValue = (typeof Robots)[keyof typeof Robots]
