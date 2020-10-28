import {EWebNotificationPermission} from '@constants/web-notification'
import {Maybe} from '@toolbox/custom-types'

export interface IState {
    permission: Maybe<EWebNotificationPermission>
}

export const initialState: IState = {
    permission: null
}
