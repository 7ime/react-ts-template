import {WebNotificationAction, WebNotificationState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(WebNotificationState.initialState, (builder) => {
    builder
        .addCase(WebNotificationAction.setPermission, (state, {payload}) => {
            state.permission = payload
        })
})
