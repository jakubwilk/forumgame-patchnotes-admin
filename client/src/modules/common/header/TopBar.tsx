import clsx from 'clsx'

import { Logo } from './Logo.tsx'

import classes from './Header.module.css'

export function TopBar() {
  return (
    <header className={clsx('py-8 px-4 sticky z-10', classes.topBar)}>
      <div className={'container mx-auto'}>
        <div className={'flex justify-between gap-4'}>
          <Logo />
          <p>{'nav'}</p>
        </div>
      </div>
    </header>
  )
}
