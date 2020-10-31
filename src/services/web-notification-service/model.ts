export interface IWebNotificationService {
    getPermission(): NotificationPermission
    requestPermission(): Promise<NotificationPermission>
}
