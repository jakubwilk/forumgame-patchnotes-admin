import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { isNil } from 'lodash'

import { useAppContext } from '../modules/common/hooks'
import { LayoutLoader } from '../modules/common/layout'
import { AppConfigTypesEnum } from '../modules/common/models'

import { useConfigQuery } from './api'
import { ROUTER } from './config'

export function App() {
  const { data, isFetching } = useConfigQuery()
  const { dispatch } = useAppContext()

  useEffect(() => {
    if (!isNil(data)) {
      dispatch({
        type: AppConfigTypesEnum.UPDATE_VERSION,
        payload: { version: data.version },
      })
    }
  }, [data, dispatch])

  if (isFetching) {
    return <LayoutLoader />
  }

  return <RouterProvider router={ROUTER} />
}
