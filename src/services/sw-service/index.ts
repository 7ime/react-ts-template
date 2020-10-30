import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {ISwService} from '@services/sw-service/model'

const CACHE_NAME = 'v1'

const urlsToCache = [
    '/',
    'main.bundle.js'
]

export default class SwService implements ISwService {
    checkSupport(): boolean {
        return 'serviceWorker' in navigator
    }

    register(): Promise<ServiceWorkerRegistration> {
        return runtime.register()
    }

    cacheFiles(): Promise<void> {
        return caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache)
        })
    }

    cacheResponse(event: any): Promise<Response> {
        return caches.match(event.request).then((response) => {
            if (response) {
                return response
            }

            return fetch(event.request)
        })
    }
}

