import { Path } from '../constants'

export const checkIsLoading = (authStatus: string, pathname: string) =>
  authStatus === 'configuring' ||
  (authStatus !== 'unauthenticated' && pathname === Path.Landingpage) ||
  (authStatus !== 'authenticated' && pathname !== Path.Landingpage)
