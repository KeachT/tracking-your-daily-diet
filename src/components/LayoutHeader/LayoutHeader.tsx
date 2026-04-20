import { Box, Burger, Image, Title, useMantineTheme } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

import { Path } from '../../constants'
import styles from './LayoutHeader.module.css'

type LayoutHeaderProps = {
  navbarOpened: boolean
  setNavbarOpened: Dispatch<SetStateAction<boolean>>
}

export function LayoutHeader({
  navbarOpened,
  setNavbarOpened,
}: LayoutHeaderProps) {
  const theme = useMantineTheme()
  const [scroll] = useWindowScroll()

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        boxShadow: scroll.y > 0 ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'box-shadow 200ms',
      }}
    >
      <Burger
        opened={navbarOpened}
        onClick={() => setNavbarOpened((navbarOpened) => !navbarOpened)}
        size="sm"
        hiddenFrom="md"
        color={theme.colors.gray[6]}
      />

      <Box className={styles.iconContainer}>
        <Image src="/favicon.ico" alt="App Icon" />
      </Box>
      <Link href={Path.Day} className={styles.title}>
        <Title order={3} w={800} fw={200}>
          Tracking Your Daily Diet
        </Title>
      </Link>
    </Box>
  )
}
