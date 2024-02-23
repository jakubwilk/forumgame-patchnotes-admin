import { RouterProvider } from 'react-router-dom'

import { ROUTER } from './config'

export function AppWrapper() {
  return <RouterProvider router={ROUTER} />
}
