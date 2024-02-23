import { RouterProvider } from 'react-router-dom'

import { ROUTER } from './config'

export function App() {
  return <RouterProvider router={ROUTER} />
}
