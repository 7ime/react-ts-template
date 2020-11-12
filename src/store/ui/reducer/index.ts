import {UiAction, UiState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(UiState.initialState, (builder) => {
    builder
        .addCase(UiAction.preloaderDeleted, (state) => {
            state.preloaderExist = false
        })
        .addCase(UiAction.setTheme, (state, {payload}) => {
            state.theme = payload
        })
})
