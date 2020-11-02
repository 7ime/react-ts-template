import getService from '@services/index'
import {EPostMessageTypes} from '../post-message'
import {IPostMessage} from '../post-message/model'
import {ENamesCaches} from '@caches/index'

const service = getService()

self.addEventListener('install', async (event: any) => {
    console.log('sw install')

    await service.cacheService.clearCaches()

    Promise.all([
        service.cacheService.cacheStatic(),
        service.cacheService.cachePosts(),
        service.cacheService.cachePages(),
    ])
})

self.addEventListener('activate', (event: any) => {
    console.log('sw activate')
})

self.addEventListener('push', (event: any) => {
    console.log('sw push')

    event.target.registration.showNotification('Hello World', {
        body: 'Test notification message',
        actions: [
            {action: 'yes', title: 'Yes'},
            {action: 'no', title: 'No'}
        ]
    })
})

self.addEventListener('fetch', async(event: any) => {
    console.log('sw fetch')

    const isExist = await service.cacheService.checkFileForExistInCache(ENamesCaches.static, event.request.url)

    if (!isExist) {
        await service.cacheService.addFilesToCache(ENamesCaches.static, [event.request.url])
    }

    // service.cacheService.cacheResponse(event)
})

self.addEventListener('notificationclick', (event: any) => {
    switch (event.action) {
        case 'yes': {
            break
        }
        case 'no': {
            break
        }
        default: {
            break
        }
    }
})

self.addEventListener('message', (event) => {
    if (location.origin !== event.origin) return

    const data: IPostMessage.Data<unknown> = event.data

    switch (data.type) {
        case EPostMessageTypes.welcome: {
            console.log(data.payload)
        }
    }

    service.postMessage.sendToClients((self as any).clients, {
        type: EPostMessageTypes.welcome,
        payload: {
            message: 'hello client'
        }
    })
})
