import {EI18nLanguages, EI18nNameSpaces} from '@constants/i18n'

import localesWelcomeEN from '@i18n/locales/en/welcome.json'
import localesWelcomeRU from '@i18n/locales/ru/welcome.json'

import localesSharedEN from '@i18n/locales/en/shared.json'
import localesSharedRU from '@i18n/locales/ru/shared.json'

export type II18nResources = Record<EI18nLanguages, Record<EI18nNameSpaces, Record<string, unknown>>>

export const i18nResources: II18nResources = {
    [EI18nLanguages.EN]: {
        [EI18nNameSpaces.welcome]: localesWelcomeEN,
        [EI18nNameSpaces.shared]: localesSharedEN,
    },
    [EI18nLanguages.RU]: {
        [EI18nNameSpaces.welcome]: localesWelcomeRU,
        [EI18nNameSpaces.shared]: localesSharedRU,
    }
}
