export enum Path {
  Index = '/',
  Day = '/day',
  Week = '/week',
  Preset = '/preset',
  DailyGoal = '/daily-goal',
  Settings = '/settings',
  Landingpage = '/landingpage',
  Terms = '/terms',
  PrivacyPolicy = '/privacy-policy',
}

/**
 * Pages that must stay reachable without signing in.
 *
 * The landing page is the entry point, and the legal pages are linked from the
 * footer on every page — a visitor who has not signed up still has to be able
 * to read the terms and the privacy policy.
 */
export const PublicPaths: readonly string[] = [
  Path.Landingpage,
  Path.Terms,
  Path.PrivacyPolicy,
]
