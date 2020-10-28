import {EWebNotificationPermission} from '@constants/web-notification'

export interface IWebNotificationService {
    requestPermission(): Promise<EWebNotificationPermission>
}
