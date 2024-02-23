import { Outlet } from 'react-router-dom'

import { BetaTopbar } from '../development'

export function IndexLayout() {
  return (
    <>
      <BetaTopbar />
      <Outlet />
    </>
  )
}
