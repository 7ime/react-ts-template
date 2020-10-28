import {IService} from './model'
import JsonPlaceholderService from './jsonplaceholder-service'
import UiService from '@services/ui-service'

class Service implements IService {
    jsonPlaceholderService = new JsonPlaceholderService()
    uiService = new UiService()
}

const service = new Service()

const getService = () => service

export default getService
