import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {SwAction} from '../index'
import {checkSupportServiceWorkersEcosystem} from '@toolbox/utils/support-features'
import {EPostMessageTypes} from '../../../post-message'
import {IPostMessage} from '../../../post-message/model'

const service: IService = getService()

export function* register() {
    if (checkSupportServiceWorkersEcosystem()) {
        const worker: ServiceWorkerRegistration = yield call(service.swService.register)

        yield put(SwAction.registered(worker))
        yield put(SwAction.launchPostMessageListener())

        service.postMessage.sendToServiceWorker(worker, {
            type: EPostMessageTypes.welcome,
            payload: {
                message: 'hello service worker'
            }
        })
    }
}

export function* unregister() {
    const worker = yield call(service.swService.getRegistration)

    if (worker) {
        yield call(service.swService.unregister, worker)
        yield put(SwAction.unregistered())
        yield call(service.cacheService.clearCaches)
    }
}

export function launchPostMessageListener() {
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (location.origin !== event.origin) return

        const data: IPostMessage.Data<unknown> = event.data

        switch (data.type) {
            case EPostMessageTypes.welcome: {
                console.log(data.payload)
            }
        }
    })
}

export function* rootSaga() {
    yield takeLatest([SwAction.register], register)
    yield takeLatest([SwAction.unregister], unregister)
    yield takeLatest([SwAction.launchPostMessageListener], launchPostMessageListener)
}
