import {environment} from '@toolbox/environment'

export const configuration = Object.freeze(
    {
        remoteApi: environment.production ? '/api/v1' : 'https://jsonplaceholder.typicode.com'
    }
)
