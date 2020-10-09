import {combineReducers} from '@reduxjs/toolkit'
import {JsonPlaceholderReducer} from './jsonplaceholder'

export const appReducer = combineReducers({
    jsonPlaceholder: JsonPlaceholderReducer.reducer
})

export type IAppState = ReturnType<typeof appReducer>
