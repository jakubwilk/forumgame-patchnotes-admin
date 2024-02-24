import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axios } from '../config'

import { API_CONFIG_KEYS_ENUM, IConfigResponse, TQueryOptions } from './api.model'

const getConfig = async () => {
  const { data } = await axios.get<IConfigResponse>('/config.json')

  return data
}

export function useConfigQuery(
  options?: TQueryOptions<IConfigResponse>,
): UseQueryResult<IConfigResponse> {
  return useQuery({
    queryKey: [API_CONFIG_KEYS_ENUM.GET_CONFIG],
    queryFn: getConfig,
    ...options,
  })
}
