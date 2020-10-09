import {call, put, all, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {JsonPlaceholderAction} from '../index'

const service: IService = getService()

export function* getPosts() {
    try {
        const response = yield call(service.jsonPlaceholderService.getPosts)

        yield put(JsonPlaceholderAction.getPostsSuccess(response))
    } catch (error) {
        yield put(JsonPlaceholderAction.getPostsError())
    }
}

function* getPostsSaga() {
    yield takeLatest([JsonPlaceholderAction.getPosts], getPosts)
}

export function* rootSaga() {
    yield all([
        getPostsSaga()
    ])
}
