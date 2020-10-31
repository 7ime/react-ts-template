import {Maybe} from '@toolbox/custom-types'

export interface IState {
    registration: Maybe<ServiceWorkerRegistration>
}

export const initialState: IState = {
    registration: null
}
