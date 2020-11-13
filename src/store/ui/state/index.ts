import {ETheme, ETypesThemes} from '@constants/theme'
import {Maybe} from '@toolbox/custom-types'
import {EI18nLanguages} from '@constants/i18n'

export interface IState {
    preloaderExist: boolean
    customTheme: ETheme
    systemTheme: Maybe<ETheme>
    priorityTheme: Maybe<ETypesThemes>
    language: Maybe<EI18nLanguages>
}

export const initialState: IState = {
    preloaderExist: true,
    customTheme: ETheme.light,
    systemTheme: null,
    priorityTheme: null,
    language: null
}
