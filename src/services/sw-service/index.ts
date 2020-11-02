import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {ISwService} from '@services/sw-service/model'
import {environment} from '@toolbox/environment'

export default class SwService implements ISwService {
    register(): Promise<ServiceWorkerRegistration> {
        return environment.production ? navigator.serviceWorker.register('sw.js'): runtime.register()
    }

    unregister(worker: ServiceWorkerRegistration): Promise<boolean> {
        return worker.unregister()
    }

    getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | undefined> {
        return navigator.serviceWorker.getRegistration(clientURL)
    }
}

