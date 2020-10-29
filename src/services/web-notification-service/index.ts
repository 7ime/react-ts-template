import {IWebNotificationService} from './model'
import {EWebNotificationPermission} from '@constants/web-notification'

export default class WebNotificationService implements IWebNotificationService {
    requestPermission(): Promise<EWebNotificationPermission> {
        return new Promise<EWebNotificationPermission>((resolve) => {
            Notification.requestPermission((permission) => {
                resolve(permission as EWebNotificationPermission)
            })
        })
    }
}
