import { useMemo } from 'react'
import { Text } from '@mantine/core'
import clsx from 'clsx'

import { useAppContext } from '../hooks'

import classes from './Development.module.css'

export function BetaTopBar() {
  const { state } = useAppContext()
  const clientVersion = useMemo(() => state.version, [state])

  return (
    <div className={clsx('py-2 px-4', classes.developmentBar)}>
      <div className={'container mx-auto'}>
        <div className={'text-center'}>
          <Text className={classes.developmentBarText}>
            {`🛠️ Aplikacja jest w fazie BETA, więc spora część funkcjonalności może nie działać jak należy! Aktualna wersja to ${clientVersion}.`}
          </Text>
        </div>
      </div>
    </div>
  )
}
