import {JsonPlaceholderAction} from '../index'

describe('jsonPlaceholder actions', () => {

    it('getPosts', () => {
        const action = JsonPlaceholderAction.getPosts()

        expect(action.type).toEqual(JsonPlaceholderAction.EActions.GetPosts)
    })

    it('getPostsSuccess', () => {
        const {type, payload} = JsonPlaceholderAction.getPostsSuccess([])

        expect({
            type,
            payload
        }).toEqual({
            type: JsonPlaceholderAction.EActions.GetPostsSuccess,
            payload: []
        })
    })

    it('getPostsError', () => {
        const action = JsonPlaceholderAction.getPostsError()

        expect(action.type).toEqual(JsonPlaceholderAction.EActions.GetPostsError)
    })

    it('resetState', () => {
        const action = JsonPlaceholderAction.resetState()

        expect(action.type).toEqual(JsonPlaceholderAction.EActions.ResetState)
    })
})
