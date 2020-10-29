import {combineReducers} from '@reduxjs/toolkit'
import {JsonPlaceholderReducer} from '@store/jsonplaceholder'
import {UiReducer} from '@store/ui'
import {WebNotificationReducer} from '@store/web-notification'
import {ServiceWorkerReducer} from '@store/service-worker'

export const appReducer = combineReducers({
    jsonPlaceholder: JsonPlaceholderReducer.reducer,
    ui: UiReducer.reducer,
    webNotification: WebNotificationReducer.reducer,
    serviceWorker: ServiceWorkerReducer.reducer
})

export type IAppState = ReturnType<typeof appReducer>
