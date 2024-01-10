import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppWrapper } from './AppWrapper'

import '@mantine/core/styles.css'

const theme = createTheme({})
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme={'dark'}>
        <AppWrapper />
      </MantineProvider>
    </QueryClientProvider>
  )
}
