import {createAction} from '@reduxjs/toolkit'

export enum EActions {
    Register = '[ServiceWorker] Register',
    Registered = '[ServiceWorker] Registered',
    Unregister = '[ServiceWorker] Unregister',
    Unregistered = '[ServiceWorker] Unregistered',
    LaunchPostMessageListener = '[ServiceWorker] Launch Post Message Listener',
}

export const register = createAction(EActions.Register)
export const registered = createAction<ServiceWorkerRegistration>(EActions.Registered)
export const unregister = createAction(EActions.Unregister)
export const unregistered = createAction(EActions.Unregistered)
export const launchPostMessageListener = createAction(EActions.LaunchPostMessageListener)
