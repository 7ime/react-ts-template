import i18next from '@i18n/index'
import {EI18nNameSpaces} from '@constants/i18n'

export default class Routes {
    static home = class {
        static root = () => i18next.t(`${EI18nNameSpaces.nav}:home:root`)
    }

    static restApi = class {
        static root = () => i18next.t(`${EI18nNameSpaces.nav}:restApi:root`)
    }
}
