import { Link } from 'react-router-dom'
import { Title, Tooltip } from '@mantine/core'

import classes from './Header.module.css'

export function Logo() {
  return (
    <Tooltip label={'Powrót na stronę główną'} position={'bottom'} color={'gray'}>
      <Link to={'/'} title={'Powrót na stronę główną'}>
        <Title order={1} className={classes.logoTitle}>
          {'Patch'}
          <span className={classes.logoText}>{'notes'}</span>
        </Title>
      </Link>
    </Tooltip>
  )
}
