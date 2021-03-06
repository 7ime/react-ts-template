import {IPostMessageService} from '@services/post-message-service/model'
import {IPostMessage} from '../../post-message/model'

export default class PostMessageService implements IPostMessageService {
    async sendToClients<T>(clients: Clients, data: IPostMessage.Data<T>): Promise<void> {
        const all: ReadonlyArray<Client> = await clients.matchAll()

        all.map((client: Client) => {
            return client.postMessage(data)
        })
    }

    sendToServiceWorker<T>(worker: ServiceWorkerRegistration, data: IPostMessage.Data<T>) {
        if (worker.active) {
            worker.active.postMessage(data)
        }
    }
}

