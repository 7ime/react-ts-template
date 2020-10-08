import {merge} from '../helpers/merge'
import {IJsonPlaceholder} from '@entities/jsonplaceholder'

export default class MockJsonPlaceholder {
    static modelDTO = (partial?: Partial<IJsonPlaceholder.ModelDTO>) => merge<IJsonPlaceholder.ModelDTO>({
        id: 1,
        title: 'Test',
        body: 'Hello world',
        userId: 1001
    }, partial)
}
