import {EI18nLanguages, EI18nNameSpaces} from '@constants/i18n'

import * as LocalesEN from '@i18n/locales/en'
import * as LocalesRU from '@i18n/locales/ru'

export type II18nResources = Record<EI18nLanguages, Record<EI18nNameSpaces, Record<string, unknown>>>

export const i18nResources: II18nResources = {
    [EI18nLanguages.EN]: {
        [EI18nNameSpaces.welcome]: LocalesEN.welcome,
        [EI18nNameSpaces.shared]: LocalesEN.shared,
        [EI18nNameSpaces.nav]: LocalesEN.nav,
        [EI18nNameSpaces.settings]: LocalesEN.settings,
    },
    [EI18nLanguages.RU]: {
        [EI18nNameSpaces.welcome]: LocalesRU.welcome,
        [EI18nNameSpaces.shared]: LocalesRU.shared,
        [EI18nNameSpaces.nav]: LocalesRU.nav,
        [EI18nNameSpaces.settings]: LocalesRU.settings,
    }
}
