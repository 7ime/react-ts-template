import {call, put, takeLatest, select} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../index'

const service: IService = getService()

export function* getPosts() {
    const posts = yield select(JsonPlaceholderSelector.getPosts)

    if (!posts) {
        try {
            const response = yield call(service.jsonPlaceholderService.getPosts)

            yield put(JsonPlaceholderAction.getPostsSuccess(response))
        } catch (error) {
            yield put(JsonPlaceholderAction.getPostsError())
        }
    }
}

export function* rootSaga() {
    yield takeLatest([JsonPlaceholderAction.getPosts], getPosts)
}
