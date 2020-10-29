import {all} from 'redux-saga/effects'
import {JsonPlaceholderSaga} from './jsonplaceholder'
import {UiSaga} from '@store/ui'
import {WebNotificationSaga} from '@store/web-notification'
import {ServiceWorkerSaga} from '@store/service-worker'

export default function* saga() {
    yield all([
        JsonPlaceholderSaga.rootSaga(),
        UiSaga.rootSaga(),
        WebNotificationSaga.rootSaga(),
        ServiceWorkerSaga.rootSaga()
    ])
}
