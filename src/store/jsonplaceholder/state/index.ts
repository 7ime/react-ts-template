import {Maybe} from '@toolbox/custom-types'
import {IJsonPlaceholder} from '@entities/jsonplaceholder'

export interface IState {
    posts: Maybe<IJsonPlaceholder.Model[]>
    isLoadingPosts: boolean
    isGetPostsError: boolean
}

export const initialState: IState = {
    posts: null,
    isGetPostsError: false,
    isLoadingPosts: false
}
