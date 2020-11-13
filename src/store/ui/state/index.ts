import {ETheme} from '@constants/theme'
import {Maybe} from '@toolbox/custom-types'
import {EI18nLanguages} from '@constants/i18n'

export interface IState {
    preloaderExist: boolean
    theme: ETheme
    systemTheme: Maybe<ETheme>
    language: Maybe<EI18nLanguages>
}

export const initialState: IState = {
    preloaderExist: true,
    theme: ETheme.light,
    systemTheme: null,
    language: null
}
