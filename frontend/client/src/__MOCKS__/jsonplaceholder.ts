import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import {merge} from '@toolbox/tests/helpers/merge'

export default class MockJsonPlaceholder {
    static modelDTO = (partial?: Partial<IJsonPlaceholder.ModelDTO>) => merge<IJsonPlaceholder.ModelDTO>({
        id: 1,
        title: 'Test',
        body: 'Hello world',
        userId: 1001
    }, partial)
}
