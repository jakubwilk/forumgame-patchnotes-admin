import { MantineProvider, MantineTheme } from '@mantine/core'

import { App } from './App'

import '@mantine/core/styles.layer.css'

const THEME: Partial<MantineTheme> = {
  primaryColor: 'orange',
}

export function AppWrapper() {
  return (
    <MantineProvider defaultColorScheme={'dark'} forceColorScheme={'dark'} theme={THEME}>
      <App />
    </MantineProvider>
  )
}
