import {ENamesCaches} from '@caches/index'

export interface ISwService {
    register(): Promise<ServiceWorkerRegistration>
    cacheStatic(): Promise<void>
    cachePages(): Promise<void>
    cachePosts(): Promise<void>
    cacheResponse(event: any): Promise<Response>
    clearCaches(): Promise<boolean[]>
    checkFileForExistInCache(cacheName: ENamesCaches, fileName: string): Promise<boolean>
    addFilesToCache(cacheName: ENamesCaches, fileNames: string[]): Promise<void>
}
