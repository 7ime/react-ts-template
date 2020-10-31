import {IPostMessage} from '../../post-message/model'

export interface IPostMessageService {
    sendToClients<T>(clients: Clients, data: IPostMessage.Data<T>): Promise<void>
    sendToServiceWorker<T>(registration: ServiceWorkerRegistration, data: IPostMessage.Data<T>): void
}
