export interface ISwService {
    checkSupport(): boolean
    register(): Promise<ServiceWorkerRegistration>
}
