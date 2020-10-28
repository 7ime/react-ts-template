import {all} from 'redux-saga/effects'
import {JsonPlaceholderSaga} from './jsonplaceholder'
import {UiSaga} from '@store/ui'

export default function* saga() {
    yield all([
        JsonPlaceholderSaga.rootSaga(),
        UiSaga.rootSaga()
    ])
}
