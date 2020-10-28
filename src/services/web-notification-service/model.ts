import {EWebNotificationPermission} from '@constants/web-notification'
import {IWebNotification} from '@entities/web-notification'

export interface IWebNotificationService {
    requestPermission(): Promise<EWebNotificationPermission>
    showNotification(payload: IWebNotification.ShowNotification): Notification
}
