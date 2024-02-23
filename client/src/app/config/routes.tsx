import { createBrowserRouter } from 'react-router-dom'

import { IndexLayout } from '../../modules/common/layout'
import { Config, Home } from '../pages'

export const ROUTER = createBrowserRouter([
  {
    element: <IndexLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'config',
        element: <Config />,
      },
    ],
  },
])
