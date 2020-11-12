import {UiAction, UiState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(UiState.initialState, (builder) => {
    builder
        .addCase(UiAction.preloaderDeleted, (state) => {
            state.preloaderExist = false
        })
        .addCase(UiAction.setUserTheme, (state, {payload}) => {
            state.userTheme = payload
        })
        .addCase(UiAction.setSystemTheme, (state, {payload}) => {
            state.systemTheme = payload
        })
})
