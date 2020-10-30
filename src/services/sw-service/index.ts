import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {ISwService} from '@services/sw-service/model'
import {URLS_TO_CACHE, ENamesCashes} from '@caches/index'

export default class SwService implements ISwService {
    checkSupport(): boolean {
        return 'serviceWorker' in navigator
    }

    register(): Promise<ServiceWorkerRegistration> {
        return runtime.register()
    }

    cacheStatic(): Promise<void> {
        return caches.open(ENamesCashes.static).then((cache) => {
            return cache.addAll(URLS_TO_CACHE.static)
        })
    }

    cachePages(): Promise<void> {
        return caches.open(ENamesCashes.pages).then((cache) => {
            return cache.addAll(URLS_TO_CACHE.pages)
        })
    }

    cachePosts(): Promise<void> {
        return caches.open(ENamesCashes.posts).then((cache) => {
            return cache.addAll(URLS_TO_CACHE.posts)
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

