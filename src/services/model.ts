import {IJsonPlaceholderService} from './jsonplaceholder-service/model'
import {IUiService} from '@services/ui-service/model'
import {IWebNotificationService} from '@services/web-notification-service/model'
import {IServiceWorkerService} from '@services/service-worker/model'

export interface IService {
    jsonPlaceholderService: IJsonPlaceholderService
    uiService: IUiService
    webNotificationService: IWebNotificationService
    serviceWorkerService: IServiceWorkerService
}
