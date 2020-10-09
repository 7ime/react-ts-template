import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {JsonPlaceholderAction} from '../index'

const service: IService = getService()

export function* getPosts(action: JsonPlaceholderAction.IGetPosts) {
    try {
        const response = yield call(service.jsonPlaceholderService.getPosts)

        yield put(JsonPlaceholderAction.getPostsSuccess(response))
    } catch (error) {
        yield put(JsonPlaceholderAction.getPostsError())
    }
}

function* getPostsSaga() {
    yield takeLatest(JsonPlaceholderAction.EActions.GetPosts, getPosts)
}

export function* getPost(action: JsonPlaceholderAction.IGetPost) {
    try {
        const response = yield call(service.jsonPlaceholderService.getPost, action.payload)

        yield put(JsonPlaceholderAction.getPostSuccess(response))
    } catch (error) {
        console.error(error)
    }
}

function* getPostSaga() {
    yield takeEvery(JsonPlaceholderAction.EActions.GetPost, getPost)
}

export function* rootSaga() {
    yield all([
        getPostsSaga(),
        getPostSaga()
    ])
}
