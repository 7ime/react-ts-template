import {IUiService} from './model'
import {ETheme, ETypesThemes, LOCAL_STORAGE_PRIORITY_THEME_KEY, LOCAL_STORAGE_THEME_KEY} from '@constants/theme'
import {Maybe} from '@toolbox/custom-types'

export default class UiService implements IUiService {

    removePreloader(): boolean {
        const node = document.querySelector('#preloader')

        return !!(node && node.parentNode && node.parentNode.removeChild(node))
    }

    getCustomTheme(): Maybe<ETheme> {
        return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Maybe<ETheme>
    }

    setCustomTheme(theme: ETheme) {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }

    getPriorityTheme(): Maybe<ETypesThemes> {
        return localStorage.getItem(LOCAL_STORAGE_PRIORITY_THEME_KEY) as Maybe<ETypesThemes>
    }

    setPriorityTheme(priorityTheme: ETypesThemes) {
        localStorage.setItem(LOCAL_STORAGE_PRIORITY_THEME_KEY, priorityTheme)
    }
}
