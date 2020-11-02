import {URLS_TO_CACHE, ENamesCaches} from '@caches/index'
import {ICacheService} from '@services/cache-service/model'

export default class CacheService implements ICacheService {
    async cacheStatic(): Promise<void> {
        return this.addFilesToCache(ENamesCaches.static, URLS_TO_CACHE.static)
    }

    async cachePages(): Promise<void> {
        return this.addFilesToCache(ENamesCaches.pages, URLS_TO_CACHE.pages)
    }

    async cachePosts(): Promise<void> {
        return this.addFilesToCache(ENamesCaches.posts, URLS_TO_CACHE.posts)
    }

    cacheResponse(event: any): Promise<Response> {
        return caches.match(event.request).then((response) => {
            if (response) {
                return response
            }

            return fetch(event.request)
        })
    }

    async checkFileForExistInCache(cacheName: ENamesCaches, fileName: string): Promise<boolean> {
        const cache = await caches.open(cacheName)

        const cacheFiles = await cache.keys()

        const index = cacheFiles.findIndex(item => item.url === fileName)

        return index !== -1
    }

    async addFilesToCache(cacheName: ENamesCaches, fileNames: string[]): Promise<void> {
        const cache = await caches.open(cacheName)

        return cache.addAll(fileNames)
    }

    async clearCaches(): Promise<boolean[]> {
        const allNamesCaches = await caches.keys()

         return Promise.all(
             allNamesCaches.filter(() => true).map((cacheName: string) => {
                return caches.delete(cacheName)
            })
        )
    }
}

