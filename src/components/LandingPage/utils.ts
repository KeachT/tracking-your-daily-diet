import { createStyles } from '@mantine/emotion'

export const createLandingPageStyle = createStyles((theme, _, u) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 200,
    paddingBottom: 100,

    [u.smallerThan('sm')]: {
      paddingBottom: 100,
      paddingTop: 50,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.black,

    [u.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [u.smallerThan('sm')]: {
      fontSize: 16,
    },
  },
}))
