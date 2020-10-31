export interface ISwService {
    register(): Promise<ServiceWorkerRegistration>
    cacheStatic(): Promise<void>
    cachePages(): Promise<void>
    cachePosts(): Promise<void>
    cacheResponse(event: any): Promise<Response>
    clearCaches(): Promise<boolean[]>
}
