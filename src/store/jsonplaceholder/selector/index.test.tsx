import {JsonPlaceholderState, JsonPlaceholderSelector} from '../index'
import MockJsonPlaceholder from '@__mocks__/jsonplaceholder'
import {IAppState} from '../../app-reducer'
import MockAppState from '@__mocks__/app-state'

describe('jsonPlaceholder selector', () => {
    test('getTotalCountOfPosts when posts not exist', () => {
        const state: IAppState = MockAppState.initialAppState()

        const result = JsonPlaceholderSelector.getTotalCountOfPosts(state)
        expect(result).toBeNull()
    })

    test('getTotalCountOfPosts when posts exist', () => {
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
