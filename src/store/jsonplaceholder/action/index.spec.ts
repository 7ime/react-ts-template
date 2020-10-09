import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import MockJsonPlaceholder from '@__mocks__/jsonplaceholder'
import {JsonPlaceholderAction} from '../index'

describe('jsonPlaceholder actions', () => {

    it('getPosts', () => {

        const expected: JsonPlaceholderAction.IGetPosts = {
            type: JsonPlaceholderAction.EActions.GetPosts
        }

        expect(JsonPlaceholderAction.getPosts()).toEqual(expected)
    })

    it('getPostsSuccess', () => {
        const payload: IJsonPlaceholder.ModelDTO[] = [
            MockJsonPlaceholder.modelDTO()
        ]

        const expected: JsonPlaceholderAction.IGetPostsSuccess = {
            type: JsonPlaceholderAction.EActions.GetPostsSuccess,
            payload
        }

        expect(JsonPlaceholderAction.getPostsSuccess(payload)).toEqual(expected)
    })

    it('getPostsError', () => {

        const expected: JsonPlaceholderAction.IGetPostsError = {
            type: JsonPlaceholderAction.EActions.GetPostsError
        }

        expect(JsonPlaceholderAction.getPostsError()).toEqual(expected)
    })

    it('resetState', () => {

        const expected: JsonPlaceholderAction.IResetState = {
            type: JsonPlaceholderAction.EActions.ResetState
        }

        expect(JsonPlaceholderAction.resetState()).toEqual(expected)
    })
})
