import {ETheme, ETypesThemes} from '@constants/theme'
import {Maybe} from '@toolbox/custom-types'

export interface IUiService {
    removePreloader(): boolean
    getCustomTheme(): Maybe<ETheme>
    setCustomTheme(theme: ETheme): void
    getPriorityTheme(): Maybe<ETypesThemes>
    setPriorityTheme(priorityTheme: ETypesThemes): void
}
