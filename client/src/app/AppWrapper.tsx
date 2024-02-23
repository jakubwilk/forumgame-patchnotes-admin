import { MantineProvider } from '@mantine/core'

import { App } from './App'
import { THEME } from './config'

import '@mantine/core/styles.layer.css'

export function AppWrapper() {
  return (
    <MantineProvider defaultColorScheme={'dark'} forceColorScheme={'dark'} theme={THEME}>
      <App />
    </MantineProvider>
  )
}
