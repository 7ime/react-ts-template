import i18next from '@i18n/index'

export default class Routes {
    static home = class {
        static root = () => i18next.t('nav:home.root')
    }

    static restApi = class {
        static root = () => i18next.t('nav:restApi.root')
    }
}
