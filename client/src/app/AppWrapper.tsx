import { RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import { ROUTER } from './config'

import '@mantine/core/styles.layer.css'

export function AppWrapper() {
  return (
    <MantineProvider defaultColorScheme={'dark'} forceColorScheme={'dark'}>
      <RouterProvider router={ROUTER} />
    </MantineProvider>
  )
}
