import {createAction} from '@reduxjs/toolkit'
import {ETheme} from '@constants/theme'

export enum EActions {
    RemovePreloader = '[Ui] Remove Preloader',
    PreloaderDeleted =  '[Ui] Preloader Deleted',
    InitTheme = '[Ui] Init Theme',
    SetTheme =  '[Ui] Set Theme',
    SetSystemTheme =  '[Ui] Set System Theme',
}

export const removePreloader = createAction(EActions.RemovePreloader)
export const preloaderDeleted = createAction(EActions.PreloaderDeleted)
export const initTheme = createAction(EActions.InitTheme)
export const setTheme = createAction<ETheme>(EActions.SetTheme)
export const setSystemTheme = createAction<ETheme>(EActions.SetSystemTheme)
