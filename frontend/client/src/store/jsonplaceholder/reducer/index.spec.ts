import {JsonPlaceholderAction, JsonPlaceholderState, JsonPlaceholderReducer} from '../index'
import MockJsonPlaceholder from '@__MOCKS__/jsonplaceholder'

describe('jsonPlaceholder reducer', () => {

    it('should return the initial state', () => {
        expect(JsonPlaceholderReducer.reducer(undefined, {} as any)).toEqual(JsonPlaceholderState.initialState)
    })

    it('should handle EActions.GetPosts', () => {
        expect(JsonPlaceholderReducer.reducer(
            JsonPlaceholderState.initialState,
            JsonPlaceholderAction.getPosts()
        )).toMatchObject<Partial<JsonPlaceholderState.IState>>({
            isLoadingPosts: true
        })
    })

    it('should handle EActions.GetPostsSuccess', () => {
        const posts = [MockJsonPlaceholder.modelDTO()]

        expect(JsonPlaceholderReducer.reducer(
            JsonPlaceholderState.initialState,
            JsonPlaceholderAction.getPostsSuccess(posts)
        )).toMatchObject<Partial<JsonPlaceholderState.IState>>({
            isLoadingPosts: false,
            posts
        })
    })

    it('should handle EActions.ResetState', () => {
        expect(JsonPlaceholderReducer.reducer(
            {
                ...JsonPlaceholderState.initialState,
                isLoadingPosts: true
            },
            JsonPlaceholderAction.resetState()
        )).toEqual(JsonPlaceholderState.initialState)
    })
})
