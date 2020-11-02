import {EI18nLanguages, EI18nNameSpaces} from '@constants/i18n'

import welcomeEN from '@i18n/locales/en/welcome.json'
import welcomeRU from '@i18n/locales/ru/welcome.json'

import sharedEN from '@i18n/locales/en/shared.json'
import sharedRU from '@i18n/locales/ru/shared.json'

import navEN from '@i18n/locales/en/nav.json'
import navRU from '@i18n/locales/ru/nav.json'

export type II18nResources = Record<EI18nLanguages, Record<EI18nNameSpaces, Record<string, unknown>>>

export const i18nResources: II18nResources = {
    [EI18nLanguages.EN]: {
        [EI18nNameSpaces.welcome]: welcomeEN,
        [EI18nNameSpaces.shared]: sharedEN,
        [EI18nNameSpaces.nav]: navEN,
    },
    [EI18nLanguages.RU]: {
        [EI18nNameSpaces.welcome]: welcomeRU,
        [EI18nNameSpaces.shared]: sharedRU,
        [EI18nNameSpaces.nav]: navRU,
    }
}
