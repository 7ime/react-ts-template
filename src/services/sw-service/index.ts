import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {ISwService} from '@services/sw-service/model'
import {URLS_TO_CACHE, NAMES_CACHES} from '@caches/index'

export default class SwService implements ISwService {
    register(): Promise<ServiceWorkerRegistration> {
        return runtime.register()
    }

    cacheStatic(): Promise<void> {
        return caches.open(NAMES_CACHES.static).then((cache) => {
            return cache.addAll(URLS_TO_CACHE.static)
        })
    }

    cachePages(): Promise<void> {
        return caches.open(NAMES_CACHES.pages).then((cache) => {
            return cache.addAll(URLS_TO_CACHE.pages)
        })
    }

    cachePosts(): Promise<void> {
        return caches.open(NAMES_CACHES.posts).then((cache) => {
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

    clearCaches(): Promise<boolean[]> {
         return Promise.all(
            Object.keys(NAMES_CACHES).filter(() => true).map((cacheName: string) => {
                return caches.delete(cacheName)
            })
        )
    }
}

