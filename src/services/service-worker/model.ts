export interface IServiceWorkerService {
    checkSupport(): boolean
    register(): Promise<ServiceWorkerRegistration>
}
