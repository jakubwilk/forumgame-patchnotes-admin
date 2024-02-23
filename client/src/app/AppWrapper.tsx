import { MantineProvider } from '@mantine/core'

import { App } from './App'

import '@mantine/core/styles.layer.css'

export function AppWrapper() {
  return (
    <MantineProvider defaultColorScheme={'dark'} forceColorScheme={'dark'}>
      <App />
    </MantineProvider>
  )
}
