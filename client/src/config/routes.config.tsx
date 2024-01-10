import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'

export const ROUTES = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])
