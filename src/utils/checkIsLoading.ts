import { Path, PublicPaths } from '../constants'

export const checkIsLoading = (
  authStatus: string,
  pathname: string,
  isGuestMode: boolean,
) =>
  authStatus === 'configuring' ||
  (!isGuestMode &&
    authStatus !== 'unauthenticated' &&
    pathname === Path.Landingpage) ||
  (!isGuestMode &&
    authStatus !== 'authenticated' &&
    !PublicPaths.includes(pathname))
