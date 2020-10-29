const sw: Window & typeof globalThis & {
    registration: ServiceWorkerRegistration
} = self as any

sw.addEventListener('install', (event: Event) => {
    sw.registration.showNotification('Hello World', {
        body: 'ServiceWork - is working',
    })
})
