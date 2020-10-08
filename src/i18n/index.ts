import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {EI18nLanguages, LOCAL_STORAGE_LANG_KEY} from '@constants/i18n'
import {i18nResources} from '@i18n/resources'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: {
            cashes: ['localStorage'],
            lookupLocalStorage: LOCAL_STORAGE_LANG_KEY
        },
        fallbackLng: EI18nLanguages.EN,
        interpolation: {
            escapeValue: false
        },
        resources: i18nResources
    })

export default i18next
