import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {ServiceWorkerAction} from '../index'

const service: IService = getService()

export function* register() {
    if (service.serviceWorkerService.checkSupport()) {
        const response: ServiceWorkerRegistration = yield call(service.serviceWorkerService.register)

        yield put(ServiceWorkerAction.registered(response))
    }
}

export function* rootSaga() {
    yield takeLatest([ServiceWorkerAction.register], register)
}
