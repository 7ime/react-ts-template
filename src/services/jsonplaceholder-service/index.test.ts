import JsonPlaceholderService from './index'
import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import Paths from '@api/paths'
import MockJsonPlaceholder from '@__mocks__/jsonplaceholder'
import {axiosMockAdapter} from '@api/fetcher'

const instanceService = new JsonPlaceholderService()

describe('testing jsonPlaceholderService', () => {
    const jsonPlaceholderMatcher: IJsonPlaceholder.ModelDTO = {
        id: expect.anything(),
        userId: expect.anything(),
        body: expect.anything(),
        title: expect.anything()
    }

    afterEach(() => {
        axiosMockAdapter.reset()
    })

    test('testing getPosts', async() => {
        expect.hasAssertions()

        axiosMockAdapter.onGet(Paths.JsonPlaceholder.getPosts()).reply(200, [
            MockJsonPlaceholder.modelDTO()
        ])

        const response = await instanceService.getPosts()

        expect(response).toContainEqual(expect.objectContaining(jsonPlaceholderMatcher))
    })

    test('testing getPost', async() => {
        expect.hasAssertions()

        axiosMockAdapter.onGet(Paths.JsonPlaceholder.getPost(3)).reply(200, MockJsonPlaceholder.modelDTO())

        const response = await instanceService.getPost(3)

        expect(response).toMatchObject(jsonPlaceholderMatcher)
    })
})
