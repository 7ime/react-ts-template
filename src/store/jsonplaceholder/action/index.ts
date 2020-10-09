import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import {IAction} from '../../model'

export enum EActions {
    GetPosts = '[JsonPlaceholder] GetPosts',
    GetPostsSuccess = '[JsonPlaceholder] GetPostsSuccess',
    GetPostsError = '[JsonPlaceholder] GetPostsError',
    ResetState = '[JsonPlaceholder] ResetState'
}

export type IGetPosts = IAction<EActions.GetPosts>

export const getPosts = (): IGetPosts => {
    return {
        type: EActions.GetPosts
    }
}

export type IGetPostsSuccess = IAction<EActions.GetPostsSuccess, IJsonPlaceholder.ModelDTO[]>

export const getPostsSuccess = (payload: IJsonPlaceholder.ModelDTO[]): IGetPostsSuccess => {
    return {
        type: EActions.GetPostsSuccess,
        payload
    }
}

export type IGetPostsError = IAction<EActions.GetPostsError>

export const getPostsError = (): IGetPostsError => {
    return {
        type: EActions.GetPostsError
    }
}

export type IResetState = IAction<EActions.ResetState>

export const resetState = (): IResetState => {
    return {
        type: EActions.ResetState
    }
}

export type IActions =
    IGetPosts |
    IGetPostsSuccess |
    IGetPostsError |
    IResetState
