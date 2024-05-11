import { createStyles } from '@mantine/emotion'

export const createCardStyle = createStyles((theme) => ({
  button: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
      color: theme.black,
    },
  },
}))
