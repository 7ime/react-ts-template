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
        const response: ServiceWorkerRegistration = yield call(service.swService.register)

        yield put(SwAction.registered(response))
        yield put(SwAction.launchPostMessageListener())

        service.postMessage.sendToServiceWorker(response, {
            type: EPostMessageTypes.welcome,
            payload: {
                message: 'hello service worker'
            }
        })
    }
}

export function launchPostMessageListener() {
    navigator.serviceWorker.addEventListener('message', (event) => {
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
    yield takeLatest([SwAction.launchPostMessageListener], launchPostMessageListener)
}
