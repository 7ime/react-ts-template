import {createAction} from '@reduxjs/toolkit'
import {EWebNotificationPermission} from '@constants/web-notification'
import {IWebNotification} from '@entities/web-notification'

export enum EActions {
    RequestPermission = '[WebNotifications] Request Permission',
    SetPermission = '[WebNotifications] Set Permission',
    ShowNotification = '[WebNotifications] Show',
}

export const requestPermission = createAction(EActions.RequestPermission)
export const setPermission = createAction<EWebNotificationPermission>(EActions.SetPermission)
export const showNotification = createAction<IWebNotification.ShowNotification>(EActions.ShowNotification)
