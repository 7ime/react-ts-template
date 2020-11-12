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

export function* initTheme() {
    const themeFromLocalStorage = service.uiService.getTheme()

    if (themeFromLocalStorage) {
        yield put(UiAction.setTheme(themeFromLocalStorage))
    }
}

export function setTheme(action: ReturnType<typeof UiAction.setTheme>) {
    service.uiService.setTheme(action.payload)
}

export function* rootSaga() {
    yield takeLatest([UiAction.removePreloader], removePreloader)
    yield takeLatest([UiAction.initTheme], initTheme)
    yield takeLatest([UiAction.setTheme], setTheme)
}
