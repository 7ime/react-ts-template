import {IJsonPlaceholder} from '@entities/jsonplaceholder'

export interface IJsonPlaceholderService {
    getPost(id: number): Promise<IJsonPlaceholder.ModelDTO>
    getPosts(): Promise<IJsonPlaceholder.ModelDTO[]>
    updatePost(data: IJsonPlaceholder.Update): Promise<IJsonPlaceholder.ModelDTO>
    createPost(data: IJsonPlaceholder.Create): Promise<IJsonPlaceholder.ModelDTO>
    deletePost(id: number): Promise<boolean>
}
