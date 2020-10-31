import {SwAction, SwState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(SwState.initialState, (builder) => {
    builder
        .addCase(SwAction.registered, (state, {payload}) => {
            state.worker = payload
        })
        .addCase(SwAction.unregistered, (state) => {
            state.worker = null
        })
})
