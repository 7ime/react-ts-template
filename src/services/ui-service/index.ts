import {IUiService} from './model'
import {ETheme, LOCAL_STORAGE_THEME_KEY} from '@constants/theme'
import {Maybe} from '@toolbox/custom-types'

export default class UiService implements IUiService {

    removePreloader(): boolean {
        const node = document.querySelector('#preloader')

        return !!(node && node.parentNode && node.parentNode.removeChild(node))
    }

    getTheme(): Maybe<ETheme> {
        return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Maybe<ETheme>
    }

    setTheme(theme: ETheme) {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }
}
