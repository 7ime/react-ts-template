import {EWebNotificationPermission} from '@constants/web-notification'

export interface IWebNotificationService {
    checkSupport(): boolean
    getPermission(): EWebNotificationPermission
    requestPermission(): Promise<EWebNotificationPermission>
}
