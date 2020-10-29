import {IService} from './model'
import JsonPlaceholderService from './jsonplaceholder-service'
import UiService from '@services/ui-service'
import WebNotificationService from '@services/web-notification-service'
import ServiceWorkerService from '@services/service-worker'

class Service implements IService {
    jsonPlaceholderService = new JsonPlaceholderService()
    uiService = new UiService()
    webNotificationService = new WebNotificationService()
    serviceWorkerService = new ServiceWorkerService()
}

const service = new Service()

const getService = () => service

export default getService
