import {IService} from './model'
import JsonPlaceholderService from './jsonplaceholder-service'
import UiService from '@services/ui-service'
import WebNotificationService from '@services/web-notification-service'
import SwService from '@services/sw-service'
import PostMessageService from '@services/post-message-service'
import CacheService from '@services/cache-service'

class Service implements IService {
    jsonPlaceholderService = new JsonPlaceholderService()
    uiService = new UiService()
    webNotificationService = new WebNotificationService()
    swService = new SwService()
    postMessage = new PostMessageService()
    cacheService = new CacheService()
}

const service = new Service()

const getService = () => service

export default getService
