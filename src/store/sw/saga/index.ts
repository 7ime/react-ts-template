import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {SwAction} from '../index'

const service: IService = getService()

export function* register() {
    if (service.swService.checkSupport()) {
        const response: ServiceWorkerRegistration = yield call(service.swService.register)


        if (response.active) {
            navigator.serviceWorker.addEventListener('message', (event: any) => {
                console.log(event)
            })

            response.active.postMessage({
                hello: 'world'
            })
        }

        yield put(SwAction.registered(response))
    }
}

export function* rootSaga() {
    yield takeLatest([SwAction.register], register)
}
