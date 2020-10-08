import {cloneDeep} from 'lodash'
import {appReducer, IAppState} from '@store/app-reducer'

export default class MockAppState {
    static initialAppState = () => cloneDeep(appReducer({} as IAppState, {type: 'MEANINGLESS'}))
}
