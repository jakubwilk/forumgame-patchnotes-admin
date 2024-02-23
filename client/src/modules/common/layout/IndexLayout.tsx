import { Outlet } from 'react-router-dom'

import { BetaTopBar } from '../development'

export function IndexLayout() {
  return (
    <>
      <BetaTopBar />
      <Outlet />
    </>
  )
}
