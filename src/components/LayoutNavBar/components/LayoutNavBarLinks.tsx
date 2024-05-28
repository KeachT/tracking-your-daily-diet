import Link from 'next/link'
import { useRouter } from 'next/router'

import classes from '../styles/NavigationBarLinks.module.css'
import { createLinkItems } from '../utils'

export function LayoutNavBarLinks() {
  const router = useRouter()
  const linkItems = createLinkItems()

  return linkItems.map((linkItem) => (
    <Link
      key={linkItem.label}
      className={classes.link}
      data-active={linkItem.path === router.pathname || undefined}
      href={linkItem.path}
    >
      <linkItem.icon className={classes.linkIcon} stroke={1.5} />
      <span>{linkItem.label}</span>
    </Link>
  ))
}
