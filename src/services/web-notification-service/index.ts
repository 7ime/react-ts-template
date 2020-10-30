import {IWebNotificationService} from './model'

export default class WebNotificationService implements IWebNotificationService {
    checkSupport(): boolean {
        return 'Notification' in window
    }

    getPermission(): NotificationPermission {
        return Notification.permission
    }

    requestPermission(): Promise<NotificationPermission> {
        return new Promise((resolve) => {
            Notification.requestPermission((permission) => {
                resolve(permission)
            })
        })
    }
}
