import Link from 'next/link'
import { useRouter } from 'next/router'
import { TablerIconsProps } from '@tabler/icons-react'
import { Path } from '../../constants/path'
import { createNavigationBarStyle } from './utils'

type NavigationBarLinkProps = {
  linkItem: {
    path: Path
    label: string
    icon: (props: TablerIconsProps) => JSX.Element
  }
}

export function NavigationBarLink({ linkItem }: NavigationBarLinkProps) {
  const router = useRouter()
  const { classes, cx } = createNavigationBarStyle()

  return (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: linkItem.path === router.pathname,
      })}
      href={linkItem.path}
      key={linkItem.label}
    >
      <linkItem.icon className={classes.linkIcon} stroke={1.5} />
      <span>{linkItem.label}</span>
    </Link>
  )
}
