import {call, put, takeLatest} from 'redux-saga/effects'
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

export function* rootSaga() {
    yield takeLatest([JsonPlaceholderAction.getPosts], getPosts)
}
