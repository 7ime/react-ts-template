import {ETheme} from '@constants/theme'
import {Maybe} from '@toolbox/custom-types'

export interface IUiService {
    removePreloader(): boolean
    getTheme(): Maybe<ETheme>
    setTheme(theme: ETheme): void
}
