import {UiAction, UiState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(UiState.initialState, (builder) => {
    builder
        .addCase(UiAction.preloaderDeleted, (state) => {
            state.preloaderExist = false
        })
        .addCase(UiAction.setCustomTheme, (state, {payload}) => {
            state.customTheme = payload
        })
        .addCase(UiAction.setSystemTheme, (state, {payload}) => {
            state.systemTheme = payload
        })
        .addCase(UiAction.setPriorityTheme, (state, {payload}) => {
            state.priorityTheme = payload
        })
        .addCase(UiAction.setLanguage, (state, {payload}) => {
            state.language = payload
        })
})
