import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {IServiceWorkerService} from '@services/service-worker/model'

export default class ServiceWorkerService implements IServiceWorkerService {
    checkSupport(): boolean {
        return 'serviceWorker' in navigator
    }

    register(): Promise<ServiceWorkerRegistration> {
        return runtime.register()
    }
}

