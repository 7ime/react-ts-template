export interface ISwService {
    checkSupport(): boolean
    register(): Promise<ServiceWorkerRegistration>
    cacheFiles(): Promise<void>
    cacheResponse(event: any): Promise<Response>
}
