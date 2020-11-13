import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {UiAction} from '../index'
import {ETheme, PREFERS_COLOR_SCHEME} from '@constants/theme'
import i18next from '@i18n/index'

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

    const lightMatch = window.matchMedia(PREFERS_COLOR_SCHEME.light)

    if (lightMatch.matches) {
        yield put(UiAction.setSystemTheme(ETheme.light))
    }

    const darkMatch = window.matchMedia(PREFERS_COLOR_SCHEME.dark)

    if (darkMatch.matches) {
        yield put(UiAction.setSystemTheme(ETheme.dark))
    }
}

export function setTheme(action: ReturnType<typeof UiAction.setTheme>) {
    service.uiService.setTheme(action.payload)
}

export function* changeLanguage(action: ReturnType<typeof UiAction.changeLanguage>) {
    i18next.changeLanguage(action.payload)
    yield put(UiAction.setLanguage(action.payload))
}

export function* rootSaga() {
    yield takeLatest([UiAction.removePreloader], removePreloader)
    yield takeLatest([UiAction.initTheme], initTheme)
    yield takeLatest([UiAction.setTheme], setTheme)
    yield takeLatest([UiAction.changeLanguage], changeLanguage)
}
