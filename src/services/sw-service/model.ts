export interface ISwService {
    register(): Promise<ServiceWorkerRegistration>
    unregister(worker: ServiceWorkerRegistration): Promise<boolean>
    getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | undefined>
}
