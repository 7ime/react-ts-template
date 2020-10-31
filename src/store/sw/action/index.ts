import {createAction} from '@reduxjs/toolkit'

export enum EActions {
    Register = '[ServiceWorker] Register',
    Registered = '[ServiceWorker] Registered',
    LaunchPostMessageListener = '[ServiceWorker] Launch Post Message Listener',
}

export const register = createAction(EActions.Register)
export const registered = createAction<ServiceWorkerRegistration>(EActions.Registered)
export const launchPostMessageListener = createAction(EActions.LaunchPostMessageListener)
