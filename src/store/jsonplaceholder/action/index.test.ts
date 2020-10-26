import {JsonPlaceholderAction} from '../index'

describe('jsonPlaceholder actions', () => {

    test('getPosts', () => {
        const action = JsonPlaceholderAction.getPosts()

        expect(action.type).toEqual(JsonPlaceholderAction.EActions.GetPosts)
    })

    test('getPostsSuccess', () => {
        const {type, payload} = JsonPlaceholderAction.getPostsSuccess([])

        expect({
            type,
            payload
        }).toEqual({
            type: JsonPlaceholderAction.EActions.GetPostsSuccess,
            payload: []
        })
    })

    test('getPostsError', () => {
        const action = JsonPlaceholderAction.getPostsError()

        expect(action.type).toEqual(JsonPlaceholderAction.EActions.GetPostsError)
    })

    test('resetState', () => {
        const action = JsonPlaceholderAction.resetState()

        expect(action.type).toEqual(JsonPlaceholderAction.EActions.ResetState)
    })
})
