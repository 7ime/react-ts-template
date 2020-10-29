import {createAction} from '@reduxjs/toolkit'

export enum EActions {
    Register = '[ServiceWorker] Register',
    Registered = '[ServiceWorker] Registered'
}

export const register = createAction(EActions.Register)
export const registered = createAction<ServiceWorkerRegistration>(EActions.Registered)
