import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { TQueryOptions } from '../../../app/api'
import { axios } from '../../../app/config'

import { API_FAQ_KEYS_ENUM, IFaqResponse } from './api.model.ts'

const getFaq = async () => {
  const { data } = await axios.get<IFaqResponse>('/faq.json')

  return data
}

export function useFaqQuery(
  options?: TQueryOptions<IFaqResponse>,
): UseQueryResult<IFaqResponse> {
  return useQuery({ queryKey: [API_FAQ_KEYS_ENUM.GET_FAQ], queryFn: getFaq, ...options })
}
