import {Maybe} from '@toolbox/custom-types'

export interface IState {
    worker: Maybe<ServiceWorkerRegistration>
}

export const initialState: IState = {
    worker: null
}
