import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'
import {EWebNotificationPermission} from '@constants/web-notification'

const getState = (state: IAppState) => state.webNotification

export const getPermission = createSelector(getState, state => state.permission)

export const canShow = createSelector(getPermission, (permission): boolean => {
    return !!(permission && permission === EWebNotificationPermission.granted)
})
