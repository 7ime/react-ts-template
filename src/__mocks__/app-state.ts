import {cloneDeep} from 'lodash'
import {v4 as uuid} from 'uuid'
import {appReducer, IAppState} from '@store/app-reducer'

export default class MockAppState {
    static initialAppState = () => cloneDeep(appReducer({} as IAppState, {type: uuid()}))
}
