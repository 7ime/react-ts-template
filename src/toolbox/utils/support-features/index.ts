export const checkSupportServiceWorkers = (): boolean => {
    return 'serviceWorker' in navigator
}

export const checkSupportWebNotifications = (): boolean => {
    return 'Notification' in window
}

export const checkSupportPostMessage = (): boolean => {
    return 'postMessage' in window
}

export const checkSupportServiceWorkersEcosystem = (): boolean => {
    return  checkSupportServiceWorkers() && checkSupportWebNotifications() && checkSupportPostMessage()
}
