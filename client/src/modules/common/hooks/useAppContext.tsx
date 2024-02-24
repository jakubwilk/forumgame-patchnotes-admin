import { useContext } from 'react'

import { AppConfigContext } from '../context'

export function useAppContext() {
  const { state, dispatch } = useContext(AppConfigContext)

  return { state, dispatch }
}
