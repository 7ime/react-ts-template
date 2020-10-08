import {JsonPlaceholderAction, JsonPlaceholderState} from '../index'

export const reducer = (state: JsonPlaceholderState.IState = JsonPlaceholderState.initialState,
                        action: JsonPlaceholderAction.IActions): JsonPlaceholderState.IState => {
    switch (action.type) {
        case JsonPlaceholderAction.EActions.GetPosts: {
            return {
                ...state,
                isLoadingPosts: true
            }
        }
        case JsonPlaceholderAction.EActions.GetPostsSuccess: {
            return {
                ...state,
                isLoadingPosts: false,
                posts: action.payload
            }
        }
        case JsonPlaceholderAction.EActions.GetPostsError: {
            return {
                ...state,
                isLoadingPosts: false,
                isGetPostsError: true
            }
        }
        case JsonPlaceholderAction.EActions.GetPostSuccess: {
            return {
                ...state,
                post: action.payload
            }
        }
        case JsonPlaceholderAction.EActions.ResetState: {
            return JsonPlaceholderState.initialState
        }
        default:
            return state
    }
}