import {JsonPlaceholderAction, JsonPlaceholderState, JsonPlaceholderReducer} from '../index'
import MockJsonPlaceholder from '@__mocks__/jsonplaceholder'

describe('jsonPlaceholder reducer', () => {

    test('should return the initial state', () => {
        expect(JsonPlaceholderReducer.reducer(undefined, {} as any)).toEqual(JsonPlaceholderState.initialState)
    })

    test('should handle EActions.GetPosts', () => {
        expect(JsonPlaceholderReducer.reducer(
            JsonPlaceholderState.initialState,
            JsonPlaceholderAction.getPosts()
        )).toMatchObject<Partial<JsonPlaceholderState.IState>>({
            isLoadingPosts: true
        })
    })

    test('should handle EActions.GetPostsSuccess', () => {
        const posts = [MockJsonPlaceholder.modelDTO()]

        expect(JsonPlaceholderReducer.reducer(
            JsonPlaceholderState.initialState,
            JsonPlaceholderAction.getPostsSuccess(posts)
        )).toMatchObject<Partial<JsonPlaceholderState.IState>>({
            isLoadingPosts: false,
            posts
        })
    })

    test('should handle EActions.ResetState', () => {
        expect(JsonPlaceholderReducer.reducer(
            {
                ...JsonPlaceholderState.initialState,
                isLoadingPosts: true
            },
            JsonPlaceholderAction.resetState()
        )).toEqual(JsonPlaceholderState.initialState)
    })
})
