import {IWebNotificationService} from './model'
import {EWebNotificationPermission} from '@constants/web-notification'
import {IWebNotification} from '@entities/web-notification'

export default class WebNotificationService implements IWebNotificationService {
    requestPermission(): Promise<EWebNotificationPermission> {
        return new Promise<EWebNotificationPermission>((resolve) => {
            Notification.requestPermission((permission) => {
                resolve(permission as EWebNotificationPermission)
            })
        })
    }

    showNotification(payload: IWebNotification.ShowNotification): Notification {
        return new Notification(payload.title, payload.options)
    }
}
