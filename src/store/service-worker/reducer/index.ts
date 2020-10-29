import {ServiceWorkerAction, ServiceWorkerState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(ServiceWorkerState.initialState, (builder) => {
    builder
        .addCase(ServiceWorkerAction.registered, (state, {payload}) => {
            state.registration = payload
        })
})
