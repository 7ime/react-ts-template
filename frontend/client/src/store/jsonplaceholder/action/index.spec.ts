import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import MockJsonPlaceholder from '@__MOCKS__/jsonplaceholder'
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

    it('getPost', () => {

        const expected: JsonPlaceholderAction.IGetPost = {
            type: JsonPlaceholderAction.EActions.GetPost,
            payload: 1
        }

        expect(JsonPlaceholderAction.getPost(1)).toEqual(expected)
    })

    it('getPostSuccess', () => {
        const payload: IJsonPlaceholder.ModelDTO = MockJsonPlaceholder.modelDTO()

        const expected: JsonPlaceholderAction.IGetPostSuccess = {
            type: JsonPlaceholderAction.EActions.GetPostSuccess,
            payload
        }

        expect(JsonPlaceholderAction.getPostSuccess(payload)).toEqual(expected)
    })

    it('resetState', () => {

        const expected: JsonPlaceholderAction.IResetState = {
            type: JsonPlaceholderAction.EActions.ResetState
        }

        expect(JsonPlaceholderAction.resetState()).toEqual(expected)
    })
})
