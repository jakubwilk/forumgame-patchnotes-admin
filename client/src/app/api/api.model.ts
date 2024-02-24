import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  UseQueryOptions,
} from '@tanstack/react-query'

export type TQueryOptions<T> =
  | Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
  | Omit<UndefinedInitialDataOptions<T>, 'queryKey' | 'queryFn'>
  | Omit<DefinedInitialDataOptions<T>, 'queryKey' | 'queryFn'>

export enum API_CONFIG_KEYS_ENUM {
  GET_CONFIG = 'GET_CONFIG',
}

export interface IConfigResponse {
  version: string
}
