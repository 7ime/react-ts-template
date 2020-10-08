import {IFetcher} from '@api/fetcher/model'
import Paths from '@api/paths'
import {IJsonPlaceholderService} from './model'
import {injectPropertyFetcher} from '@toolbox/injects/injects-fetcher'
import {IJsonPlaceholder} from '@entities/jsonplaceholder'

export default class JsonPlaceholderService implements IJsonPlaceholderService {

    @injectPropertyFetcher
    private fetcher!: IFetcher

    getPosts = (): Promise<IJsonPlaceholder.ModelDTO[]> => {
        return this.fetcher.get(Paths.JsonPlaceholder.getPosts())
    }

    getPost = (id: number): Promise<IJsonPlaceholder.ModelDTO> => {
        return this.fetcher.get(Paths.JsonPlaceholder.getPost(id))
    }

    createPost = (data: IJsonPlaceholder.Create): Promise<IJsonPlaceholder.ModelDTO> => {
        return this.fetcher.post(Paths.JsonPlaceholder.createPost(), data)
    }

    updatePost = (data: IJsonPlaceholder.Update): Promise<IJsonPlaceholder.ModelDTO> => {
        return this.fetcher.put(Paths.JsonPlaceholder.updatePost(data.id), data)
    }

    deletePost = (id: number): Promise<boolean> => {
        return this.fetcher.delete(Paths.JsonPlaceholder.deletePost(id))
    }
}
