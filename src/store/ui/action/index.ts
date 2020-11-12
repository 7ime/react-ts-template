import {createAction} from '@reduxjs/toolkit'
import {ETheme} from '@constants/theme'

export enum EActions {
    RemovePreloader = '[Ui] Remove Preloader',
    PreloaderDeleted =  '[Ui] Preloader Deleted',
    SetUserTheme =  '[Ui] Set User Theme',
    SetSystemTheme =  '[Ui] Set System Theme',
}

export const removePreloader = createAction(EActions.RemovePreloader)
export const preloaderDeleted = createAction(EActions.PreloaderDeleted)
export const setUserTheme = createAction<ETheme>(EActions.SetUserTheme)
export const setSystemTheme = createAction<ETheme>(EActions.SetSystemTheme)
