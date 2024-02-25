import { createBrowserRouter } from 'react-router-dom'

import { IndexLayout } from '../../modules/common/layout'
import { Config, Faq, Home } from '../pages'

export const ROUTER = createBrowserRouter([
  {
    element: <IndexLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/config',
        element: <Config />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
    ],
  },
])
