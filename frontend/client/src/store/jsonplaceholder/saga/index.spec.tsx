import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import MockJsonPlaceholder from '@__MOCKS__/jsonplaceholder'
import {expectSaga} from 'redux-saga-test-plan'
import getService from '@services/index'
import {call} from 'redux-saga-test-plan/matchers'
import {JsonPlaceholderAction, JsonPlaceholderState, JsonPlaceholderReducer, JsonPlaceholderSaga} from '../index'
import {ISagaTestRunResult} from '@toolbox/tests/model/shared'

const service = getService()

describe('jsonPlaceholder saga', () => {

    it('getPosts', () => {
        const response: IJsonPlaceholder.ModelDTO[] = [MockJsonPlaceholder.modelDTO({id: 99})]

        return expectSaga(JsonPlaceholderSaga.getPosts, JsonPlaceholderAction.getPosts()).provide([
            [call(service.jsonPlaceholderService.getPosts), response]
        ])
            .withReducer<JsonPlaceholderState.IState>(JsonPlaceholderReducer.reducer, JsonPlaceholderState.initialState)
            .dispatch(JsonPlaceholderAction.getPosts())
            .run()
            .then((result: ISagaTestRunResult<JsonPlaceholderState.IState>) => expect(result.storeState.posts).toEqual(response))
    })

    it('getPost', () => {
        const id = 999
        const response: IJsonPlaceholder.ModelDTO = MockJsonPlaceholder.modelDTO({id})

        return expectSaga(JsonPlaceholderSaga.getPost, JsonPlaceholderAction.getPost(id)).provide([
            [call(service.jsonPlaceholderService.getPost, id), response]
        ])
            .withReducer<JsonPlaceholderState.IState>(JsonPlaceholderReducer.reducer, JsonPlaceholderState.initialState)
            .dispatch(JsonPlaceholderAction.getPost(id))
            .run()
            .then((result: ISagaTestRunResult<JsonPlaceholderState.IState>) => expect(result.storeState.post).toEqual(response))
    })
})
