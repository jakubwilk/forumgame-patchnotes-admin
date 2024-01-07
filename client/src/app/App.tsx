import { createTheme, MantineProvider } from '@mantine/core'

import { AppWrapper } from './AppWrapper'

import '@mantine/core/styles.css'

const theme = createTheme({})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppWrapper />
    </MantineProvider>
  )
}
