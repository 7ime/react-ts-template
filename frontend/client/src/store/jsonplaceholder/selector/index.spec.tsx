import {JsonPlaceholderState, JsonPlaceholderSelector} from '../index'
import MockJsonPlaceholder from '@__MOCKS__/jsonplaceholder'
import {IAppState} from '../../app-reducer'
import MockAppState from '@__MOCKS__/app-state'

describe('jsonPlaceholder selector', () => {
    it('getTotalCountOfPosts when posts not exist', () => {
        const state: IAppState = MockAppState.initialAppState()

        const result = JsonPlaceholderSelector.getTotalCountOfPosts(state)
        expect(result).toBeNull()
    })

    it('getTotalCountOfPosts when posts exist', () => {
        const state: IAppState = {
            ...MockAppState.initialAppState(),
            jsonPlaceholder: {
                ...JsonPlaceholderState.initialState,
                posts: [MockJsonPlaceholder.modelDTO()]
            }
        }

        const result = JsonPlaceholderSelector.getTotalCountOfPosts(state)
        expect(result).toEqual(1)
    })
})
