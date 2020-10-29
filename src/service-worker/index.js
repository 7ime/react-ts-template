self.addEventListener('install', (event) => {
    event.waitUntil(
        self.registration.showNotification('Hello World', {
            body: 'ServiceWork - is working'
        })
    )
})
