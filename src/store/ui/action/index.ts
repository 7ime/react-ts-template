import {createAction} from '@reduxjs/toolkit'
import {ETheme, ETypesThemes} from '@constants/theme'
import {EI18nLanguages} from '@constants/i18n'
import {Maybe} from '@toolbox/custom-types'

export enum EActions {
    RemovePreloader = '[Ui] Remove Preloader',
    PreloaderDeleted =  '[Ui] Preloader Deleted',
    InitTheme = '[Ui] Init Theme',
    SetCustomTheme =  '[Ui] Set Custom Theme',
    SetSystemTheme =  '[Ui] Set System Theme',
    SetPriorityTheme =  '[Ui] Set Priority Theme',
    ChangeLanguage =  '[Ui] Change Language',
    SetLanguage =  '[Ui] Set Language',
}

export const removePreloader = createAction(EActions.RemovePreloader)
export const preloaderDeleted = createAction(EActions.PreloaderDeleted)
export const initTheme = createAction(EActions.InitTheme)
export const setCustomTheme = createAction<ETheme>(EActions.SetCustomTheme)
export const setSystemTheme = createAction<ETheme>(EActions.SetSystemTheme)
export const setPriorityTheme = createAction<Maybe<ETypesThemes>>(EActions.SetPriorityTheme)
export const changeLanguage = createAction<EI18nLanguages>(EActions.ChangeLanguage)
export const setLanguage = createAction<EI18nLanguages>(EActions.SetLanguage)
