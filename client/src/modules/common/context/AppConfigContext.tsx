import { createContext, ReactNode, useMemo, useReducer } from 'react'

import {
  IAppConfigContext,
  INITIAL_APP_CONFIG,
  INITIAL_APP_CONFIG_STATE,
} from '../models'
import { appConfigReducer } from '../reducers'

interface IProps {
  children: ReactNode
}

export const AppConfigContext = createContext<IAppConfigContext>(INITIAL_APP_CONFIG)

export function AppConfigProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(appConfigReducer, INITIAL_APP_CONFIG_STATE)

  const values = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  )

  return <AppConfigContext.Provider value={values}>{children}</AppConfigContext.Provider>
}
