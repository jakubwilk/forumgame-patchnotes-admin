import { Outlet } from 'react-router-dom'

import { BetaTopBar } from '../development'
import { TopBar } from '../header'

export function IndexLayout() {
  return (
    <>
      <BetaTopBar />
      <TopBar />
      <Outlet />
    </>
  )
}
