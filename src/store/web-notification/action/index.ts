import {createAction} from '@reduxjs/toolkit'
import {EWebNotificationPermission} from '@constants/web-notification'

export enum EActions {
    RequestPermission = '[WebNotifications] Request Permission',
    SetPermission = '[WebNotifications] Set Permission',
}

export const requestPermission = createAction(EActions.RequestPermission)
export const setPermission = createAction<EWebNotificationPermission>(EActions.SetPermission)
