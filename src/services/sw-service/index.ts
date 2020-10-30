import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {ISwService} from '@services/sw-service/model'

export default class SwService implements ISwService {
    checkSupport(): boolean {
        return 'serviceWorker' in navigator
    }

    register(): Promise<ServiceWorkerRegistration> {
        return runtime.register()
    }
}

