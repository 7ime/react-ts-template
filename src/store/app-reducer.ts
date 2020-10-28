import {combineReducers} from '@reduxjs/toolkit'
import {JsonPlaceholderReducer} from '@store/jsonplaceholder'
import {UiReducer} from '@store/ui'

export const appReducer = combineReducers({
    jsonPlaceholder: JsonPlaceholderReducer.reducer,
    ui: UiReducer.reducer
})

export type IAppState = ReturnType<typeof appReducer>
