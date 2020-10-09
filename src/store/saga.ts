import {all} from 'redux-saga/effects'
import {JsonPlaceholderSaga} from './jsonplaceholder'

export default function* saga() {
    yield all([
        JsonPlaceholderSaga.rootSaga()
    ])
}
