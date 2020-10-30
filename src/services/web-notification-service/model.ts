export interface IWebNotificationService {
    checkSupport(): boolean
    getPermission(): NotificationPermission
    requestPermission(): Promise<NotificationPermission>
}
