import getService from '@services/index'
import {EPostMessageTypes} from '../post-message'
import {IPostMessage} from '../post-message/model'

const service = getService()

self.addEventListener('install', (event: any) => {
    event.waitUntil(
        Promise.all([
            service.swService.cacheStatic(),
            service.swService.cachePosts(),
            service.swService.cachePages(),
        ])
    )
})

self.addEventListener('push', (event: any) => {
    event.target.registration.showNotification('Hello World', {
        body: 'Test notification message',
        actions: [
            {action: 'yes', title: 'Yes'},
            {action: 'no', title: 'No'}
        ]
    })
})

self.addEventListener('fetch', (event: any) => {
    // event.respondWith(
    //     service.swService.cacheResponse(event)
    // )
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
