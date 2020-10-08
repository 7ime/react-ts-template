import {createSelector} from 'reselect'
import {IAppState} from '../../app-reducer'
import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import {Maybe} from '@toolbox/custom-types'

const getState = (state: IAppState) => state.jsonPlaceholder

export const getPosts = createSelector(
    getState,
    state => state.posts
)

export const getTotalCountOfPosts = createSelector(
    getPosts,
    (posts): number | null => {
        return posts ? posts.length : null
    }
)

export const makeGetCertainNumberOfPosts = (count: number) => {
    return createSelector(
        getPosts,
        (posts): Maybe<IJsonPlaceholder.Model[]> => {
            return posts ? posts.slice(0, count) : null
        }
    )
}
