import { RouterProvider } from 'react-router-dom'

import { ROUTES } from '../config/routes.config'

export function AppWrapper() {
  return <RouterProvider router={ROUTES} />
}
