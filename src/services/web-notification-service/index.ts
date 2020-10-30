import {IWebNotificationService} from './model'
import {EWebNotificationPermission} from '@constants/web-notification'

export default class WebNotificationService implements IWebNotificationService {
    checkSupport(): boolean {
        return 'Notification' in window
    }

    getPermission(): EWebNotificationPermission {
        return Notification.permission as EWebNotificationPermission
    }

    requestPermission(): Promise<EWebNotificationPermission> {
        return new Promise<EWebNotificationPermission>((resolve) => {
            Notification.requestPermission((permission) => {
                resolve(permission as EWebNotificationPermission)
            })
        })
    }
}
