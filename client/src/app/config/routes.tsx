import { createBrowserRouter } from 'react-router-dom'

import { App } from '../App'
import { Config, Home } from '../pages'

export const ROUTER = createBrowserRouter([
  {
    element: <App />,
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
