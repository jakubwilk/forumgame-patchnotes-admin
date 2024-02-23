import { Title } from '@mantine/core'

import classes from './Header.module.css'

export function Logo() {
  return (
    <Title order={1} className={classes.logoTitle}>
      {'Patch'}
      <span className={classes.logoText}>{'notes'}</span>
    </Title>
  )
}
