import { MantineProvider } from '@mantine/core'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppConfigProvider } from '../modules/common/context'

import { App } from './App'
import { THEME } from './config'

import '@mantine/core/styles.layer.css'

const queryCache = new QueryCache({
  // onError: (error) => {
  //   console.log('AppWrapper onerror error', error)
  // },
  // onSettled: (data, error) => {
  //   console.log('AppWrapper onsettled data', data)
  //   console.error('AppWrapper onsettled error', error)
  // },
})

const queryClient = new QueryClient({
  queryCache,
})

export function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        defaultColorScheme={'dark'}
        forceColorScheme={'dark'}
        theme={THEME}
      >
        <AppConfigProvider>
          <App />
        </AppConfigProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
}
