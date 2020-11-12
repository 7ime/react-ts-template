import {ETheme} from '@constants/theme'

export interface IState {
    preloaderExist: boolean
    userTheme: ETheme
    systemTheme: ETheme
}

export const initialState: IState = {
    preloaderExist: true,
    userTheme: ETheme.dark,
    systemTheme: ETheme.dark,
}
