import {ETheme} from '@constants/theme'
import {Maybe} from '@toolbox/custom-types'

export interface IState {
    preloaderExist: boolean
    theme: ETheme
    systemTheme: Maybe<ETheme>
}

export const initialState: IState = {
    preloaderExist: true,
    theme: ETheme.light,
    systemTheme: null,
}
