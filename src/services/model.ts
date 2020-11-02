import {IJsonPlaceholderService} from './jsonplaceholder-service/model'
import {IUiService} from '@services/ui-service/model'
import {IWebNotificationService} from '@services/web-notification-service/model'
import {ISwService} from '@services/sw-service/model'
import {IPostMessageService} from '@services/post-message-service/model'
import {ICacheService} from '@services/cache-service/model'

export interface IService {
    jsonPlaceholderService: IJsonPlaceholderService
    uiService: IUiService
    webNotificationService: IWebNotificationService
    swService: ISwService
    postMessage: IPostMessageService
    cacheService: ICacheService
}
