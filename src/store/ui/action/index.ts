import {createAction} from '@reduxjs/toolkit'

export enum EActions {
    RemovePreloader = '[Ui] Remove Preloader',
    PreloaderDeleted =  '[Ui] Preloader Deleted'
}

export const removePreloader = createAction(EActions.RemovePreloader)
export const preloaderDeleted = createAction(EActions.PreloaderDeleted)
