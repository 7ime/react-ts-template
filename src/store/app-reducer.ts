import {combineReducers} from '@reduxjs/toolkit'
import {JsonPlaceholderReducer} from '@store/jsonplaceholder'
import {UiReducer} from '@store/ui'
import {WebNotificationReducer} from '@store/web-notification'

export const appReducer = combineReducers({
    jsonPlaceholder: JsonPlaceholderReducer.reducer,
    ui: UiReducer.reducer,
    webNotification: WebNotificationReducer.reducer,
})

export type IAppState = ReturnType<typeof appReducer>
