import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {UiAction} from '../index'
import {ETheme, ETypesThemes, PREFERS_COLOR_SCHEME} from '@constants/theme'
import i18next from '@i18n/index'

const service: IService = getService()

export function* removePreloader() {
    const isDeleted = yield call(service.uiService.removePreloader)

    if (isDeleted) {
        yield put(UiAction.preloaderDeleted())
    }
}

export function* initTheme() {
    const themeFromLocalStorage = service.uiService.getCustomTheme()
    const priorityThemeFromLocalStorage = service.uiService.getPriorityTheme()

    if (themeFromLocalStorage) {
        yield put(UiAction.setCustomTheme(themeFromLocalStorage))
    }

    if (priorityThemeFromLocalStorage) {
        yield put(UiAction.setPriorityTheme(priorityThemeFromLocalStorage))
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

export function* setCustomTheme(action: ReturnType<typeof UiAction.setCustomTheme>) {
    service.uiService.setCustomTheme(action.payload)
    service.uiService.setPriorityTheme(ETypesThemes.custom)

    yield put(UiAction.setPriorityTheme(ETypesThemes.custom))
}

export function setSystemTheme() {
    service.uiService.setPriorityTheme(ETypesThemes.system)
}

export function* changeLanguage(action: ReturnType<typeof UiAction.changeLanguage>) {
    i18next.changeLanguage(action.payload)
    yield put(UiAction.setLanguage(action.payload))
}

export function* rootSaga() {
    yield takeLatest([UiAction.removePreloader], removePreloader)
    yield takeLatest([UiAction.initTheme], initTheme)
    yield takeLatest([UiAction.setCustomTheme], setCustomTheme)
    yield takeLatest([UiAction.setSystemTheme], setSystemTheme)
    yield takeLatest([UiAction.changeLanguage], changeLanguage)
}
