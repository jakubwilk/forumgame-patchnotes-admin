import { Dispatch } from 'react'

export type TAppConfigContextState = {
  version: string
}

export interface IAppConfigContext {
  state: TAppConfigContextState
  dispatch: Dispatch<TAppConfigAction>
}

export enum AppConfigTypesEnum {
  UPDATE_VERSION = 'UPDATE_VERSION',
}

export type TAppConfigPayload = {
  [AppConfigTypesEnum.UPDATE_VERSION]: {
    version: string
  }
}

export type TAppConfigAction = {
  type: AppConfigTypesEnum.UPDATE_VERSION
  payload: TAppConfigContextState
}

export const INITIAL_APP_CONFIG_STATE: TAppConfigContextState = {
  version: '',
}

export const INITIAL_APP_CONFIG: IAppConfigContext = {
  state: INITIAL_APP_CONFIG_STATE,
  dispatch: () => {},
}
