import { AppConfigTypesEnum, TAppConfigAction, TAppConfigContextState } from '../models'

export function appConfigReducer(
  state: TAppConfigContextState,
  action: TAppConfigAction,
): TAppConfigContextState {
  switch (action.type) {
    case AppConfigTypesEnum.UPDATE_VERSION:
      return {
        version: action.payload.version,
      }
    default:
      return state
  }
}
