import {Maybe} from '@toolbox/custom-types'

export interface IState {
    permission: Maybe<NotificationPermission>
}

export const initialState: IState = {
    permission: null
}
