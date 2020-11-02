import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {UiAction} from '../index'

const service: IService = getService()

export function* removePreloader() {
    const isDeleted = yield call(service.uiService.removePreloader)

    if (isDeleted) {
        yield put(UiAction.preloaderDeleted())
    }
}

export function* rootSaga() {
    yield takeLatest([UiAction.removePreloader], removePreloader)
}
